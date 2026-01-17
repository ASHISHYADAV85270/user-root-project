import { useUser } from '../context/UserContext';

const Step4 = () => {
  const { userInfo, updateUserInfo } = useUser();

  return (
    <>
      <h1 className="text-2xl font-semibold text-[#132C4A] w-[450px]">
        What is your name?
      </h1>

      <div className="flex flex-col gap-4 w-[530px] mt-6">
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
      </div>
    </>
  );
};

export default Step4;
