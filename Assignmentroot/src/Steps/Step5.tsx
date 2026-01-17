import { useUser } from '../context/UserContext';
import { IconButton, InputAdornment, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
const Step5 = () => {

    const { userInfo, updateUserInfo } = useUser();
    const [showPassword, setShowPassword] = useState(false);
    const passwordsMatch = userInfo.password === userInfo.confirmPassword;

    return (
        <>
            <h1 className="text-2xl font-semibold text-[#132C4A] w-[450px]">
                Tell us your <span className="text-red-600">name</span>
            </h1>

            <div className="flex flex-col gap-4 w-[530px] mt-6">
                <div className="flex flex-col gap-2">
                    <TextField
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        value={userInfo.password}
                        onChange={(e) => updateUserInfo({ password: e.target.value })}
                        fullWidth
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword((v) => !v)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                </div>
                <div className="flex flex-col gap-2">

                    <TextField
                        label="Confirm Password"
                        type={showPassword ? "text" : "password"}
                        value={userInfo.confirmPassword}
                        onChange={(e) => updateUserInfo({ confirmPassword: e.target.value })}
                        fullWidth
                        error={!passwordsMatch}
                        helperText={
                            !passwordsMatch ? "Passwords do not match" : ""
                        }
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword((v) => !v)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default Step5;
