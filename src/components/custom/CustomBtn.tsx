import { Button, buttonVariants } from "@/components/ui/button"
import Icon, { type IconType } from "./Icon"
import type { VariantProps } from "class-variance-authority";

type ButtonVariantProps = VariantProps<typeof buttonVariants>

interface ButtonProps {
  className?: string
  text?: string;
  startIcon?: IconType;
  endIcon?: IconType;
  isSolid?: boolean;
  linkpath?: any;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  disabled?: boolean;
  variant?: ButtonVariantProps["variant"];
  size?: ButtonVariantProps["size"];
}

export default function CustomBtn({
  disabled,
  endIcon,
  onClick,
  startIcon,
  text,
  type,
  variant = "default",
  className
}: ButtonProps) {
  return (
    <Button variant={variant} size="lg" type={type} disabled={disabled} onClick={onClick} className={className}>
      {startIcon && <Icon icon={startIcon} />}
      {text}
      {endIcon && <Icon icon={endIcon} />}
    </Button>
  )
}