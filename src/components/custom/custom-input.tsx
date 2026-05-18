import React from "react";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "../ui/input-group";
import Icon, { type IconType } from "./Icon";

interface InputProps {
    startIcon?: IconType;
    type?: string;
    placeholder?: string;
    onChange?: (val: string) => void;
    value?: string;
}

const CustomInput = ({
    startIcon,
    type = "text",
    placeholder,
    onChange,
    value,
}: InputProps) => {

    const [showPassword, setShowPassword] = React.useState(false);

    const isPassword = type === "password"
    return (
        <InputGroup className="h-12"
        >
            {startIcon && (
                <InputGroupAddon>
                    <Icon icon={startIcon} className="h-5 w-5" />
                </InputGroupAddon>
            )}

            <InputGroupInput
                type={type === "password" && showPassword ? "text" : type}
                placeholder={placeholder}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onChange?.(e.target.value)
                }
                className="text-sm"
            />
            {isPassword && <InputGroupAddon align={`inline-end`}>
                <Icon
                    onClick={() => setShowPassword(!showPassword)}
                    icon={showPassword ? "EyeClosed" : "Eye"}
                />
            </InputGroupAddon>}
        </InputGroup>
    );
};

export default CustomInput;