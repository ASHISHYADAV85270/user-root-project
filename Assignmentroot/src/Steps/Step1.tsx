import { UserIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import AccountCard from '../AccountCard.tsx';
import { useUser } from '../context/UserContext';

const Step1 = () => {
    const { userInfo, updateUserInfo } = useUser();

    return (
        <>
            <h1 className="text-2xl font-semibold text-[#132C4A] w-[450px]">
                To join us tell us{" "}
                <span className="text-red-600">what type of account</span> you are opening
            </h1>

            <div className="flex flex-col gap-4 w-[530px] mt-6">
                <AccountCard
                    label="Personal"
                    icon={UserIcon}
                    selected={userInfo.accountType === "personal"}
                    onClick={() => updateUserInfo({ accountType: "personal" })}
                />

                <AccountCard
                    label="Business"
                    icon={ShoppingBagIcon}
                    selected={userInfo.accountType === "business"}
                    onClick={() => updateUserInfo({ accountType: "business" })}
                />
            </div>
        </>
    )
}

export default Step1