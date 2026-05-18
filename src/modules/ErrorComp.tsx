import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import { useRouteError } from "react-router-dom";

const CustomError = () => {
    const error = useRouteError() as Error;

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">
                Something went wrong
            </h1>

            <p className="text-muted-foreground">
                {error?.message}
            </p>

            <Button
                size={`lg`}
                onClick={() => window.location.reload()}
            >
                <RefreshCcw />
                Reload
            </Button>
        </div>
    );
};

export default CustomError;