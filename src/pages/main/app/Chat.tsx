import ChatBubble from "@/components/custom/chatbuble";
import { Toaster } from "sonner";
import { useEffect, useRef } from "react";

const Chat = () => {
  const messages = [
    { text: "Heyy wassup hw are you doing?", isBot: false },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius accusantium voluptatum debitis quis itaque blanditiis nobis. Delectus voluptate perferendis atque mollitia commodi laboriosam cum minima in vel hic.",
      isBot: true,
    },
    { text: "Heyy wassup hw are you doing?", isBot: false },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius accusantium voluptatum debitis quis itaque blanditiis nobis. Delectus voluptate perferendis atque mollitia commodi laboriosam cum minima in vel hic.",
      isBot: true,
    },
    { text: "Heyy wassup hw are you doing?", isBot: false },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius accusantium voluptatum debitis quis itaque blanditiis nobis. Delectus voluptate perferendis atque mollitia commodi laboriosam cum minima in vel hic.",
      isBot: true,
    },
    { text: "Heyy wassup hw are you doing?", isBot: false },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius accusantium voluptatum debitis quis itaque blanditiis nobis. Delectus voluptate perferendis atque mollitia commodi laboriosam cum minima in vel hic.",
      isBot: true,
    },
    { text: "Heyy wassup hw are you doing?", isBot: false },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius accusantium voluptatum debitis quis itaque blanditiis nobis. Delectus voluptate perferendis atque mollitia commodi laboriosam cum minima in vel hic.",
      isBot: true,
    },
    { text: "Heyy wassup hw are you doing?", isBot: false },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius accusantium voluptatum debitis quis itaque blanditiis nobis. Delectus voluptate perferendis atque mollitia commodi laboriosam cum minima in vel hic.",
      isBot: true,
    },
    { text: "Heyy wassup hw are you doing?", isBot: false },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius accusantium voluptatum debitis quis itaque blanditiis nobis. Delectus voluptate perferendis atque mollitia commodi laboriosam cum minima in vel hic.",
      isBot: true,
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to bottom on messages render
  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="relative w-full h-full flex flex-col">
      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto p-2 gap-4 flex flex-col"
      >
        {messages.map((msg, i) => (
          <ChatBubble key={i} text={msg.text} isBot={msg.isBot} />
        ))}
      </div>

      {/* Optional: bottom input will go here in MainLayout */}
      <Toaster position="top-right" />
    </div>
  );
};

export default Chat;
