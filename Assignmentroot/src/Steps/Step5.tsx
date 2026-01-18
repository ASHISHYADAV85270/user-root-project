import { useUser } from '../context/UserContext';
import { IconButton, InputAdornment, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

const Step5 = () => {
    const { userInfo, updateUserInfo } = useUser();
    const [showPassword, setShowPassword] = useState(false);
    const [touchedPassword, setTouchedPassword] = useState(false);
    const [touchedConfirm, setTouchedConfirm] = useState(false);

    const isPasswordShort = touchedPassword && userInfo.password.length < 6;
    const passwordsMatch = touchedConfirm && userInfo.password !== userInfo.confirmPassword;

    return (
        <>
            <span className="sm:text-2xl text-lg font-medium text-[#132C4A]">
                Create Password for your account
            </span>

            <div className="flex flex-col gap-4 mt-6">
                <div className="flex flex-col gap-2">
                    <TextField
                        label="Enter new password"
                        type={showPassword ? "text" : "password"}
                        value={userInfo.password}
                        onChange={(e) => updateUserInfo({ password: e.target.value })}
                        fullWidth
                        helperText={isPasswordShort ? "Password must be at least 6 characters" : ""}
                        error={isPasswordShort}
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
                        onBlur={() => setTouchedPassword(true)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <TextField
                        label="Confirm password"
                        type={showPassword ? "text" : "password"}
                        value={userInfo.confirmPassword}
                        onChange={(e) => updateUserInfo({ confirmPassword: e.target.value })}
                        fullWidth
                        error={passwordsMatch}
                        helperText={passwordsMatch ? "Both passwords must match" : ""}
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
                        onBlur={() => setTouchedConfirm(true)}
                    />
                </div>
            </div>
        </>
    );
};

export default Step5;
