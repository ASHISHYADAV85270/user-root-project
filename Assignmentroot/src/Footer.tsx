import { useUser } from './context/UserContext';

const Footer = () => {
  const { userInfo, currentStep, prevStep, nextStep, canProceedToNextStep, sendOTP, otpSent } = useUser();

  const handleBack = () => {
    if (currentStep > 0) {
      prevStep();
    }
  };

  const handleContinue = () => {
    // On step 2 (index 1), trigger send OTP if not already sent
    if (currentStep === 1 && !otpSent) {
      sendOTP();
      nextStep(); // Move to OTP input step after sending

    } else if (canProceedToNextStep() && currentStep < 4) {
      nextStep();
    }
  };

  const isLastStep = currentStep === 4;

  return (
    <div className='absolute bottom-10 w-[515px] flex justify-between'>
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className={`px-6 py-2 rounded-lg border border-gray-300 text-gray-700 transition ${currentStep === 0
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-gray-100 cursor-pointer'
            }`}
        >
          Back
        </button>
        {!isLastStep && (
          <button
            onClick={handleContinue}
            disabled={!canProceedToNextStep()}
            className={`px-6 py-2 rounded-lg text-white transition ${canProceedToNextStep()
              ? 'bg-[#0054FD] hover:bg-blue-700 cursor-pointer'
              : 'bg-gray-300 cursor-not-allowed'
              }`}
          >
            {currentStep === 1 ? 'Send OTP' : 'Continue'}
          </button>
        )}
      </div>
  );
};

export default Footer;