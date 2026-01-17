import { useUser } from '../context/UserContext';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - firebase.js is a JavaScript file without type declarations
import firebase from '../../firebase.js';

const Step2 = () => {
    const { userInfo, updateUserInfo } = useUser();

    return (
        <>
            <h1 className="text-2xl font-semibold text-[#132C4A] w-[450px]">
                OTP Verification
            </h1>

            <div className="flex flex-col gap-4 w-[530px] mt-6">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">Mobile Number</label>
                    <div className="flex gap-2">
                        <PhoneInput
                            country={'in'}
                            containerClass='!w-[100px] rounded-lg'
                            inputClass='!w-[100px] !py-2 rounded-lg !h-[42px]'
                            dropdownClass='w-auto'
                            countryCodeEditable={false}
                            onChange={(val)=>{
                                updateUserInfo({ countryCode: val });
                            }}  
                        />
                        <input
                            type="tel"
                            value={userInfo.mobileNumber}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, '');
                                updateUserInfo({ mobileNumber: value });
                            }}
                            placeholder="Enter your mobile number"
                            maxLength={10}
                            className="flex-1 px-4 py-2 border border-[#D9E0E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0054FD] focus:border-transparent"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Step2;
