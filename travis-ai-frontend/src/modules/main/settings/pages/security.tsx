import { useEffect } from "react";
import ChangePassword from "../components/change-password";
import DeleteAccount from "../components/delete-account";
import { useDialogDesc } from "../store/useDialogDesc";

const SecuritySettings = () => {
  const { setTitle, title } = useDialogDesc();
  useEffect(() => {
    setTitle("Manage sensitive actions");
  }, [title]);

  return (
    <div className="mx-auto p-2 rounded-xl space-y-4 justify-center">
      <div className="flex justify-between items-center flex-col gap-4 w-full">
        <ChangePassword />

        <DeleteAccount />
      </div>
    </div>
  );
};

export default SecuritySettings;
