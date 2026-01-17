import { UserIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import AccountCard from '../AccountCard.tsx';
import { useUser } from '../context/UserContext';

const Step1 = () => {
    const { userInfo, updateUserInfo } = useUser();

    return (
        <>
            <h1 className="text-2xl font-normal text-[#132C4A] w-[450px]">
                To join us tell us{" "}
                <span className="font-medium">what type of account</span> you are opening
            </h1>

            <div className="flex flex-col gap-4 w-[530px] mt-6">
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