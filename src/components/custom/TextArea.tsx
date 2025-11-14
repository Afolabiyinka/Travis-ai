import IconButton from "./iconbutton";

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
  return (
    <div className="relative w-full border p-3 px-3  gap-3 flex rounded-full items-center justify-center ">
      <span>
        <IconButton
          icon={`Plus`}
          tooltip={`Upload a file`}
          onClick={onIconClick}
        />
      </span>
      <textarea
        placeholder={text}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        className={`w-full h-11 resize-none py-1 text-xl placeholder:text-left
            outline-none placeholder:text-muted-foreground placeholder:text-xl transition
      ${disabled ? "cursor-not-allowed opacity-50" : ""}
    `}
      />
      <span
      // className="absolute right-5 bottom-4"
      >
        <IconButton
          icon={`Send`}
          tooltip={`Send Message`}
          onClick={onIconClick}
          isSolid
        />
      </span>
    </div>
  );
};

export default TextArea;
