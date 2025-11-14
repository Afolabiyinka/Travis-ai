import IconButton from "./iconbutton";
import React from "react";

interface TextAreaProps {
  text?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  onIconClick?: () => void;
}

const TextArea = ({
  text,
  onChange,
  disabled = false,
  onIconClick,
}: TextAreaProps) => {
  const ref = React.useRef<HTMLTextAreaElement | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const el = ref.current;
    if (!el) return;

    // shrink back when empty
    if (e.target.value.trim() === "") {
      el.style.height = "40px"; // default height
    } else {
      // expand height smoothly
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    }

    // auto-scroll to bottom
    el.scrollTop = el.scrollHeight;

    onChange?.(e.target.value);
  };

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial height on mount
    el.style.height = "40px";
  }, []);

  return (
    <div className="relative w-full border p-3 gap-3 flex rounded-full items-center backdrop-blur-3xl">
      <IconButton icon="Plus" tooltip="Upload a file" onClick={onIconClick} />

      <textarea
        ref={ref}
        placeholder={text}
        onChange={handleInput}
        disabled={disabled}
        rows={1}
        className={`
          w-full max-h-40 resize-none text-xl py-1 outline-none transition-all bg-transparent
          placeholder:text-muted-foreground placeholder:text-xl 
          overflow-hidden
          ${disabled ? "cursor-not-allowed opacity-50" : ""}
        `}
      />

      <IconButton
        icon="Send"
        tooltip="Send Message"
        onClick={onIconClick}
        isSolid
      />
    </div>
  );
};

export default TextArea;
