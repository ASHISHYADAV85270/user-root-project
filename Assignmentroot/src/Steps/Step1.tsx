import { UserIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import AccountCard from '../AccountCard.tsx';
import { useUser } from '../context/UserContext';

const Step1 = () => {
    const { userInfo, updateUserInfo } = useUser();

    return (
        <>
            <span className="sm:text-2xl text-lg font-medium text-[#132C4A]">
                To join us tell us{" "}
                <span className="font-medium">what type of account</span> you are opening
            </span>

            <div className="flex flex-col gap-4 mt-6">
                <AccountCard
                    label="Personal"
                    icon={UserIcon}
                    selected={userInfo.accountType === "Personal"}
                    onClick={() => updateUserInfo({ accountType: "Personal" })}
                />

                <AccountCard
                    label="Business"
                    icon={ShoppingBagIcon}
                    selected={userInfo.accountType === "Business"}
                    onClick={() => updateUserInfo({ accountType: "Business" })}
                />
            </div>
        </>
    )
}

export default Step1