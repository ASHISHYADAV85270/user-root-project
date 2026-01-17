import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - firebase.js is a JavaScript file without type declarations
import firebase from '../../firebase.js';

interface UserInfo {
  accountType: 'Personal' | 'Business' | null;
  countryCode: string;
  mobileNumber: string;
  otp: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

interface UserContextType {
  userInfo: UserInfo;
  currentStep: number;
  otpSent: boolean;
  updateUserInfo: (updates: Partial<UserInfo>) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  canProceedToNextStep: () => boolean;
  sendOTP: () => Promise<void>;
  verifyOTP: () => Promise<boolean>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    accountType: null,
    mobileNumber: '',
    countryCode: '+91',
    otp: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [otpSent, setOtpSent] = useState(false);
  const [confirmationResult, setConfirmationResult] =
    useState<firebase.auth.ConfirmationResult | null>(null);


  const updateUserInfo = (updates: Partial<UserInfo>) => {
    setUserInfo((prev) => ({ ...prev, ...updates }));

    if (updates.mobileNumber !== undefined) {
      setOtpSent(false);
      setConfirmationResult(null);
    }
  };


  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const goToStep = (step: number) => {
    if (step >= 0 && step <= 4) setCurrentStep(step);
  };

  const sendOTP = async () => {
    try {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = undefined;
      }

      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        'recaptcha-container',
        { size: 'invisible' }
      );

      const appVerifier = window.recaptchaVerifier;

      const phone = `+${userInfo.mobileNumber}`; // must be E.164

      const confirmation = await firebase
        .auth()
        .signInWithPhoneNumber(phone, appVerifier);

      window.confirmationResult = confirmation;
      setOtpSent(true);
    } catch (err) {
      console.error('Error sending OTP:', err);
    }
  };



  const verifyOTP = async () => {
    try {
      if (!confirmationResult) return false;

      await confirmationResult.confirm(userInfo.otp);
      console.log('OTP verified successfully');
      return true;
    } catch (error) {
      console.error('Invalid OTP:', error);
      return false;
    }
  };

  const canProceedToNextStep = () => {
    switch (currentStep) {
      case 0:
        return userInfo.accountType !== null;
      case 1:
        return userInfo.mobileNumber.length === 10;
      case 2:
        return userInfo.otp.length === 4;
      case 3:
        return (
          userInfo.firstName.trim().length > 0 &&
          userInfo.lastName.trim().length > 0
        );
      case 4:
        return userInfo.password.length !==0 && userInfo.password === userInfo.confirmPassword;
      default:
        return false;
    }
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
        currentStep,
        otpSent,
        updateUserInfo,
        nextStep,
        prevStep,
        goToStep,
        canProceedToNextStep,
        sendOTP,
        verifyOTP,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
