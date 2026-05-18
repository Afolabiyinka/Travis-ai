import type React from "react";
import IconButton from "./iconbutton";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
} from "@/components/ui/input-group";

interface TextAreaProps {
  onChange?: (value: string) => void;
  disabled?: boolean;
  onIconClick?: () => void;
}

const TextArea = ({
  onChange,
  disabled = false,
  onIconClick,
}: TextAreaProps) => {
  return (
    <InputGroup>
      <InputGroupAddon align={`inline-start`}>
        <IconButton
          icon="Plus"
          tooltip="Upload a file"
          onClick={onIconClick}
        />
      </InputGroupAddon>


      <InputGroupTextarea
        placeholder="Generate Excuse"

        disabled={disabled}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          onChange?.(e.target.value)
        }
      />

      <InputGroupAddon>
        <IconButton
          icon="SendHorizonal"
          tooltip="Send Message"

        />
      </InputGroupAddon>
    </InputGroup>
  );
};

export default TextArea;