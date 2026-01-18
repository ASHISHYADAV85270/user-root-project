import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface UserInfo {
  accountType: 'Personal' | 'Business' | null;
  countryCode: string;
  mobileNumber: string;
  otp: string;
  firstName: string;
  lastName: string;
  email:string;
  password: string;
  confirmPassword: string;
}

interface UserContextType {
  userInfo: UserInfo;
  currentStep: number;
  updateUserInfo: (updates: Partial<UserInfo>) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  canProceedToNextStep: () => boolean;
  sendOTP: () => void;
  verifyOTP: () => void;
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
    email:'',
    password: '',
    confirmPassword: '',
  });

  const [currentStep, setCurrentStep] = useState(0);


  const updateUserInfo = (updates: Partial<UserInfo>) => {
    setUserInfo((prev) => ({ ...prev, ...updates }));
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

  const sendOTP = () => {
    console.log('OTP SENDED Successfully')
  };



  const verifyOTP = () => {
    console.log('Verify OTP')
  };
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
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
          userInfo.firstName.trim().length > 0 &&   isValidEmail(userInfo.email)
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
