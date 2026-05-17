import React from "react";
import * as LucideIcon from "lucide-react";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip"

export type IconType = keyof typeof LucideIcon
interface IconProps {
  icon: IconType;
  tooltip?: string;
  onClick?: () => void;
  className?: string;
}

const Icon = ({ icon, tooltip, onClick, className }: IconProps) => {
  const IconComponent = LucideIcon[icon] as React.FC<
    React.SVGProps<SVGSVGElement>
  >;
  return (
    <span onClick={onClick}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <IconComponent
              className={`cursor-pointer stroke-[1.25px] ${className}`}
            />
          </TooltipTrigger>
          {tooltip && (
            <TooltipContent>
              <p>{tooltip}</p>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </span>
  );
};

export default Icon;
