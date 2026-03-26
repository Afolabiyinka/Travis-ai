import { useEffect, useRef } from "react";

const Chat = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // auto-scroll
  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  }, []);

  document.title = "Chat";

  return (
    <div className="relative w- h-full screen flex flex-col">
      {/* <div
        ref={containerRef}
        className="flex-1 overflow-y-auto p-2 gap-4 flex flex-col w-full"
      > */}

      {/* <div key={chat.id} className="flex flex-col gap-1">
            <ChatBubble text={chat.prompt} isBot={false} />
            <ChatBubble text={chat.message} isBot={true} />
          </div>

        {loading && (
          <div className="w-full  flex justify-start mt-2">
            <span>
              <Loader />
            </span>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Chat;
