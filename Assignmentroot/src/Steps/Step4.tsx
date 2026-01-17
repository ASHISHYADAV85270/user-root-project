import { useUser } from '../context/UserContext';

const Step4 = () => {
  const { userInfo, updateUserInfo } = useUser();

  return (
    <>
      <span className="sm:text-2xl text-lg font-medium text-[#132C4A]">
        What is your name?
      </span>

      <div className="flex flex-col gap-4 mt-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            value={userInfo.firstName}
            onChange={(e) => updateUserInfo({ firstName: e.target.value })}
            placeholder="Oliver"
            className="px-4 py-3 border border-[#D9E0E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0054FD] focus:border-transparent"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            value={userInfo.lastName}
            onChange={(e) => updateUserInfo({ lastName: e.target.value })}
            placeholder="Last Name"
            className="px-4 py-3 border border-[#D9E0E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0054FD] focus:border-transparent"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="email"
            value={userInfo.email}
            onChange={(e) => updateUserInfo({ email: e.target.value })}
            placeholder="Enter Your Email"
            className="px-4 py-3 border border-[#D9E0E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0054FD] focus:border-transparent"
          />
        </div>
      </div>
    </>
  );
};

export default Step4;
