import Footer from "./Footer";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import { useUser } from "./context/UserContext";

const RightPanel = () => {
  const { currentStep } = useUser();

  return (
    <div className="flex flex-col justify-center h-full p-10 font-rubik">
      <div className="bg-white rounded-2xl p-10 w-[708px] shadow-sm">
        {currentStep === 0 && <Step1 />}
        {currentStep === 1 && <Step2 />}
        {currentStep === 2 && <Step3 />}
        {currentStep === 3 && <Step4 />}
        {currentStep === 4 && (
          <div className="text-center py-10">
            <h1 className="text-2xl font-semibold text-[#132C4A]">
              Registration Complete!
            </h1>
            <p className="text-gray-600 mt-4">Thank you for joining us.</p>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default RightPanel;
