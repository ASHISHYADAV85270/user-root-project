import { useState } from 'react';
import { useUser } from '../context/UserContext';

const Step2 = () => {
  const { userInfo, updateUserInfo } = useUser();
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOTP = () => {
    // Here you would typically call an API to send OTP
    // For now, we'll just simulate it
    if (userInfo.mobileNumber.length >= 10) {
      setOtpSent(true);
      // Simulate OTP generation (in real app, this comes from backend)
      console.log('OTP would be sent to:', userInfo.mobileNumber);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-semibold text-[#132C4A] w-[450px]">
        Enter your <span className="text-red-600">mobile number</span>
      </h1>

      <div className="flex flex-col gap-4 w-[530px] mt-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Mobile Number</label>
          <div className="flex gap-2">
            <input
              type="tel"
              value={userInfo.mobileNumber}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ''); // Only allow digits
                updateUserInfo({ mobileNumber: value });
                if (otpSent) setOtpSent(false);
              }}
              placeholder="Enter your mobile number"
              maxLength={10}
              className="flex-1 px-4 py-3 border border-[#D9E0E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0054FD] focus:border-transparent"
            />
            <button
              onClick={handleSendOTP}
              disabled={userInfo.mobileNumber.length < 10 || otpSent}
              className={`px-6 py-3 rounded-lg text-white transition ${
                userInfo.mobileNumber.length >= 10 && !otpSent
                  ? 'bg-[#0054FD] hover:bg-blue-700 cursor-pointer'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              {otpSent ? 'Sent' : 'Send OTP'}
            </button>
          </div>
        </div>

        {otpSent && (
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
          </div>
        )}
      </div>
    </>
  );
};

export default Step2;
