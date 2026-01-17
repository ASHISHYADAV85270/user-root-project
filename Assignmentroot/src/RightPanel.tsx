import { LinearProgress } from "@mui/material";
import Footer from "./Footer";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import { useUser } from "./context/UserContext";
import Step5 from "./Steps/Step5";

const RightPanel = () => {
  const { currentStep } = useUser();

  return (
    <div className="flex flex-col justify-center h-full p-10 font-rubik">

      <div className="flex justify-center">
        <LinearProgress variant="determinate" value={(currentStep + 1) * 20}
          sx={{ width: 550 }} />
      </div>

      <div className="bg-white rounded-2xl p-10 w-auto shadow-sm h-[895px] relative">
        {currentStep === 0 && <Step1 />}
        {currentStep === 1 && <Step2 />}
        {currentStep === 2 && <Step3 />}
        {currentStep === 3 && <Step4 />}
        {currentStep === 4 && <Step5 />}
        <Footer />
      </div>
    </div>
  );
};

export default RightPanel;
