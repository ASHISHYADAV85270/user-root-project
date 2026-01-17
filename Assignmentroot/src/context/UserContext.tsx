import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface UserInfo {
  accountType: 'personal' | 'business' | null;
  mobileNumber: string;
  otp: string;
  firstName: string;
  lastName: string;
}

interface UserContextType {
  userInfo: UserInfo;
  currentStep: number;
  updateUserInfo: (updates: Partial<UserInfo>) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  canProceedToNextStep: () => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    accountType: null,
    mobileNumber: '',
    otp: '',
    firstName: '',
    lastName: '',
  });
  const [currentStep, setCurrentStep] = useState(0);

  const updateUserInfo = (updates: Partial<UserInfo>) => {
    setUserInfo((prev) => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3)); // Max step is 3 (0-indexed, so 4 steps total)
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const goToStep = (step: number) => {
    if (step >= 0 && step <= 3) {
      setCurrentStep(step);
    }
  };

  const canProceedToNextStep = () => {
    switch (currentStep) {
      case 0:
        return userInfo.accountType !== null;
      case 1:
        return userInfo.mobileNumber.length > 0 && userInfo.otp.length > 0;
      case 2:
        return userInfo.firstName.trim().length > 0 && userInfo.lastName.trim().length > 0;
      case 3:
        return false; // Last step
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
