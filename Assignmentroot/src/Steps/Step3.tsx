import { useUser } from '../context/UserContext';

const Step3 = () => {
  const { userInfo, updateUserInfo } = useUser();

  return (
    <>
      <h1 className="text-2xl font-semibold text-[#132C4A] w-[450px]">
        OPT Verification
      </h1>

      <div className="flex flex-col gap-4 w-[530px] mt-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Enter OTP</label>
          <input
            type="text"
            value={userInfo.otp}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ''); // Only allow digits
              updateUserInfo({ otp: value.slice(0, 6) }); // Max 6 digits
            }}
            placeholder="Enter 6-digit OTP"
            maxLength={6}
            className="px-4 py-3 border border-[#D9E0E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0054FD] focus:border-transparent"
          />
          <p className="text-sm text-gray-500">OTP sent to {userInfo.mobileNumber}</p>
        </div>
      </div>
    </>
  );
};

export default Step3;
