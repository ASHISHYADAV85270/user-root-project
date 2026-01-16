import { useState } from "react";
import { UserIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import AccountCard from './AccountCard.tsx';

const RightPanel = () => {
  const [accountType, setAccountType] = useState<"personal" | "business" | null>(null);

  return (
    <div className="flex flex-col justify-center h-full p-10 font-rubik">
      <div className="bg-white rounded-2xl p-10 w-[708px] shadow-sm">

        {/* Title */}
        <h1 className="text-2xl font-semibold text-[#132C4A] w-[450px]">
          To join us tell us{" "}
          <span className="text-red-600">what type of account</span> you are opening
        </h1>

        {/* Account Options */}
        <div className="flex flex-col gap-4 w-[530px] mt-6">
          <AccountCard
            label="Personal"
            icon={UserIcon}
            selected={accountType === "personal"}
            onClick={() => setAccountType("personal")}
          />

          <AccountCard
            label="Business"
            icon={ShoppingBagIcon}
            selected={accountType === "business"}
            onClick={() => setAccountType("business")}
          />
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between items-center mt-10">
          <button
            className="
              px-6 py-2 rounded-lg border border-gray-300
              text-gray-700 hover:bg-gray-100 transition
            "
          >
            Back
          </button>

          <button
            disabled={!accountType}
            className={`
              px-6 py-2 rounded-lg text-white transition
              ${accountType
                ? "bg-[#0054FD] hover:bg-blue-700"
                : "bg-gray-300 cursor-not-allowed"
              }
            `}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
