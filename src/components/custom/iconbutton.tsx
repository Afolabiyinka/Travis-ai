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
