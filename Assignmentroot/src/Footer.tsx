import { Button } from '@mui/material';
import { useUser } from './context/UserContext';

const Footer = () => {
  const { currentStep, prevStep, nextStep, canProceedToNextStep, sendOTP, otpSent } = useUser();

  const handleBack = () => {
    if (currentStep > 0) {
      prevStep();
    }
  };

  const handleContinue = () => {
    if (currentStep === 1 && !otpSent) {
      sendOTP();
      nextStep();
    } else if (canProceedToNextStep() && currentStep < 5) {
      nextStep();
    }
  };

  const isLastStep = currentStep === 5;

  return (
    <div className='absolute bottom-10 w-[515px] flex justify-between items-center'>
      <Button variant='outlined'
        disabled={currentStep === 0}
        onClick={handleBack}
      >
        Back
      </Button>
      {!isLastStep ? <Button
        variant="contained"
        disabled={!canProceedToNextStep()}
        onClick={handleContinue}>
        {currentStep === 1 ? 'Send OTP' : 'Continue'}</Button> : null}
    </div>
  );
};

export default Footer;