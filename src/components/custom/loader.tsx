import { Loader2 } from "lucide-react";

const LoadingContainer = () => {
  return <div className="w-full h-screen flex items-center justify-center">
    <Loader2 className="animate-spin" />
  </div>;
};

export default LoadingContainer;
