const Footer = () => {
  const CURRENTYEAR = new Date().getFullYear();
  return (
    <div className="p-2 px-5 flex justify-between border-t border-m-accent">
      <h1 className="text-xl"> IceChain Labs</h1>
      <p className="text-xl">{CURRENTYEAR}</p>
    </div>
  );
};

export default Footer;
