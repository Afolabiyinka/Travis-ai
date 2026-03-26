import { motion } from "motion/react";
import * as LucideIcon from "lucide-react";
import { Link } from "react-router-dom";

interface ButtonProps {
  text?: string;
  startIcon?: keyof typeof LucideIcon;
  endIcon?: keyof typeof LucideIcon;
  isSolid?: boolean;
  linkpath?: any;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const CustomBtn = ({
  text,
  startIcon,
  endIcon,
  isSolid,
  linkpath,
  type,
  disabled,
  onClick,
  className,
}: ButtonProps) => {
  const Icon = (
    startIcon ? LucideIcon[startIcon] : endIcon ? LucideIcon[endIcon] : null
  ) as React.ComponentType<any> | null;

  const baseClasses = `
    relative overflow-hidden
     rounded-full w-full 
     px-4 p-2.5 cursor-pointer
    text-base sm:text-lg 
    flex items-center justify-center gap-2.5
    transition-all duration-300 ease-out
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-m-accent/50
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variantClasses = isSolid
    ? "bg-m-accent text-white shadow-lg hover:shadow-2xl"
    : "border border-m-accent  bg-transparent  hover:bg-m-accent/20";

  const content = (
    <>
      {startIcon && Icon && (
        <Icon
          className={`
            h-4.5 w-4.5 transition-transform duration-300
            ${isSolid ? "text-white" : "text-m-accent"}
          `}
        />
      )}
      {text && <span className="relative z-10">{text}</span>}
      {endIcon && Icon && (
        <Icon
          className={`
            h-4 w-4 transition-transform duration-300
          
            ${isSolid ? "text-white" : "text-m-accent"}
          `}
        />
      )}
      {/* Shine effect for solid variant */}
      {/* {isSolid && (
        <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-700" />
        </span>
      )} */}
    </>
  );

  const button = (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={`group ${baseClasses} ${variantClasses} ${className}`}
    >
      {content}
    </motion.button>
  );

  return linkpath ? (
    <Link to={linkpath} className="block w-full">
      {button}
    </Link>
  ) : (
    button
  );
};

export default CustomBtn;
