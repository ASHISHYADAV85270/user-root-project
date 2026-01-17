import { useUser } from './context/UserContext';

const Footer = () => {
  const { currentStep, prevStep, nextStep, canProceedToNextStep } = useUser();

  const handleBack = () => {
    if (currentStep > 0) {
      prevStep();
    }
  };

  const handleContinue = () => {
    if (canProceedToNextStep() && currentStep < 3) {
      nextStep();
    }
  };

  const isLastStep = currentStep === 3;

  return (
    <div className="flex justify-between items-center mt-10">
      <button
        onClick={handleBack}
        disabled={currentStep === 0}
        className={`px-6 py-2 rounded-lg border border-gray-300 text-gray-700 transition ${
          currentStep === 0
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
          className={`px-6 py-2 rounded-lg text-white transition ${
            canProceedToNextStep()
              ? 'bg-[#0054FD] hover:bg-blue-700 cursor-pointer'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
      )}
    </div>
  );
};

export default Footer;