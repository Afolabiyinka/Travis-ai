import ChatBubble from "@/components/custom/chatbuble";

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

  return (
    <div
      className="w-full h-full py-8 
    rounded-xl  gap-6  overflow-y-scroll"
    >
      {messages.map((msg, i) => (
        <ChatBubble key={i} text={msg.text} isBot={msg.isBot} />
      ))}
    </div>
  );
};

export default Chat;
