import { useUser } from '../context/UserContext';
import { MuiOtpInput } from 'mui-one-time-password-input'
const Step3 = () => {
  const { userInfo, updateUserInfo, goToStep } = useUser();

  return (
    <>
      <span className="sm:text-2xl text-lg font-medium text-[#132C4A]">
        OPT Verification
      </span>

      <div className="flex flex-col gap-4 w-[530px] mt-6">
        <div className="flex flex-col gap-2">
          <MuiOtpInput autoFocus value={userInfo.otp} length={4} onChange={(val) => {
            updateUserInfo({ otp: val.slice(0, 4) });
          }}
          />
          <p className="text-sm text-gray-500">Did not receive OTP? <span className='cursor-pointer text-[#0054FD]' onClick={() => goToStep(1)}> Resend OTP </span> </p>
        </div>
      </div>
    </>
  );
};

export default Step3;
