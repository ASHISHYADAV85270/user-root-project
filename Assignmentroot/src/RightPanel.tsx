import { Button, Dialog, LinearProgress } from "@mui/material";
import Footer from "./Footer";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import { useUser } from "./context/UserContext";
import Step5 from "./Steps/Step5";
import { CheckCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';


const RightPanel = () => {
  const { userInfo, currentStep, goToStep } = useUser();

  return (
    <div className="flex flex-col justify-center sm:h-full sm:p-10 p-3 font-rubik">

      <div className="flex justify-center">
        <LinearProgress variant="determinate" value={(currentStep + 1) * 20}
          sx={{ width: 550 }} />
      </div>

      <div className="bg-white rounded-2xl sm:p-10 p-3 w-auto shadow-sm sm:h-[895px] h-[500px] relative">
        {currentStep === 0 && <Step1 />}
        {currentStep === 1 && <Step2 />}
        {currentStep === 2 && <Step3 />}
        {currentStep === 3 && <Step4 />}
        {(currentStep === 4 || currentStep === 5)  && <Step5 />}
        <Footer />
      </div>
      <Dialog open={currentStep === 5}>
        <div className="w-120 h-120 px-6 py-9 flex flex-col items-center gap-6" >
          <div className="w-full flex flex-col gap-2 justify-center items-center max-w-[309px]">
            <CheckCircleIcon width={46} height={46} className="text-[#4B59D5]" />
            <span className="text-2xl">You’re all set!</span>
            <span className="text-sm">Here’s a quick summary of your account details</span>
          </div>
          <div className="w-full flex flex-col gap-2 justify-center items-center bg-[#F5F5F5] p-6 gap-2 rounded-[24px]">
            <div className="flex justify-between w-full">  <span className="text-sm font-normal text-[#717680]">Account Type</span><span className="text-sm font-medium text-[#181D27]">{userInfo.accountType}</span> </div>
            <div className="flex justify-between w-full">  <span className="text-sm font-normal text-[#717680]">Name</span><span className="text-sm font-medium text-[#181D27]">{userInfo.firstName}</span> </div>
            <div className="flex justify-between w-full">  <span className="text-sm font-normal text-[#717680]">Mobile Number</span><span className="text-sm font-medium text-[#181D27]">{userInfo.mobileNumber}</span> </div>
          </div>
          <div className="font-normal flex gap-1 items-center">
            <ShieldCheckIcon className="text-[#047647] w-3.5 h-3.5" />
            <span className="text-xs">Your account is secured with bank-grade security</span>
          </div>
          <Button variant="contained" onClick={() => { goToStep(0) }}>DashBoard</Button>
        </div>
      </Dialog>
    </div>
  );
};

export default RightPanel;
