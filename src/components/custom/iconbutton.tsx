import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Icon, { type IconType } from "./Icon";
import { Button } from "../ui/button";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
  tooltip?: string;
  onClick?: () => void;
  isSolid?: boolean;
}

const IconButton = ({ icon, tooltip, onClick }: IconButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size={`icon-lg`}
            variant={`secondary`}
            onClick={onClick}
            // whileTap={{ scale: 0.7 }}
            // className={`${isSolid
            //   ? "bg-m-accent text-white shadow"
            //   : "shadow backdrop-blur-3xl hover:bg-accent text-foreground"
            //   } h-10 w-10 stroke-2  rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer p-2`}
            aria-label={tooltip}
          >
            <Icon icon={icon} />
          </Button>
        </TooltipTrigger>
        {tooltip && (
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

export default IconButton;
