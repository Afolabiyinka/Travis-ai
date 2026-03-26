import ChangePassword from "../components/change-password";
import DeleteAccount from "../components/delete-account";
import { Info } from "lucide-react";

const SecuritySettings = () => {
  return (
    <div className="mx-auto p-2 rounded-xl space-y-6 justify-center">
      <h1 className="text-2xl font-semibold">Security Settings</h1>

      <p className="text-md flex  tracking-wider gap-2 items-center">
        Manage sensitive actions like changing your password or deleting your
        account. Be careful!
        <Info size={60} className="stroke-[1px]" />
      </p>

      <div className="flex justify-between">
        <ChangePassword />

        <DeleteAccount />
      </div>
    </div>
  );
};

export default SecuritySettings;
