import IconButton from "./iconbutton";
import { CopyButton } from "@/components/modern-ui/copy-button";

interface ChatBubbleProps {
  text: string;
  isBot: boolean;
}

const ChatBubble = ({ text, isBot }: ChatBubbleProps) => {
  return (
    <div
      className={`w-full flex flex-col justify-center gap-2
      p-2  mb-3`}
    >
      <div
        className={`max-w-[80%] md:max-w-[70%] wrap-break-word p-3 rounded-full text-sm md:text-base  
          ${isBot ? "" : "bg-m-accent text-white shadow"}`}
      >
        {text}
      </div>
      {isBot && (
        <span className="flex justify-between gap-6 w-fit p-1 rounded-full">
          <IconButton icon="ThumbsUp" tooltip="Like this response" />
          <CopyButton value={`${isBot ? text : ""}`} />
          <IconButton icon="RefreshCcw" tooltip="Regenerate" />
        </span>
      )}
    </div>
  );
};

export default ChatBubble;
