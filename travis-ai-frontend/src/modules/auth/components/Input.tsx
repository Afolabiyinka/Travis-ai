import Icon from "@/components/custom/Icon";
import * as LucideIcon from "lucide-react";
import React from "react";

interface InputProps {
  startIcon: keyof typeof LucideIcon;
  type?: string;
  placeholder?: string;
  onChange?: (val: string) => void;
  value: string | undefined;
}

const Input = ({
  startIcon,
  placeholder,
  type,
  onChange,
  value,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <span className="w-full flex px-6 h-14 items-center rounded-4xl border border-m-accent">
      <Icon icon={startIcon} />
      <input
        className="h-full w-full border-0 outline-0 p-1"
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        type={type === "password" && showPassword ? "text" : type}
        {...props}
        value={value}
      />
      {type === "password" && (
        <Icon
          onClick={() => setShowPassword(!showPassword)}
          icon={showPassword ? "Eye" : "EyeClosed"}
        />
      )}
    </span>
  );
};

export default Input;
