import CustomBtn from "@/components/custom/CustomBtn";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/modern-ui/dialog";
import Input from "@/modules/auth/components/Input";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { usePassword } from "../hooks/usePassword";

const ChangePassword = () => {
  const { passwordData, setPasswordData, handleChangePassword, isPending } =
    usePassword();
  return (
    <Dialog>
      <DialogTrigger className="w-full" asChild>
        <CustomBtn
          text="Change Password"
          isSolid
          endIcon="Lock"
          className="w-full"
        />
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogHeader className="text-xl mb-3">
          <DialogTitle>Change Password</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            startIcon="Lock"
            type="password"
            placeholder="Old password"
            value={passwordData.oldPassword}
            onChange={(e) =>
              setPasswordData({ ...passwordData, oldPassword: e })
            }
          />
          <Input
            startIcon="Lock"
            type="password"
            placeholder="New password"
            value={passwordData.newPassword}
            onChange={(e) =>
              setPasswordData({ ...passwordData, newPassword: e })
            }
          />
          <Input
            startIcon="Lock"
            type="password"
            placeholder="Confirm new password"
            value={passwordData.confirmPassword}
            onChange={(e) =>
              setPasswordData({
                ...passwordData,
                confirmPassword: e,
              })
            }
          />

          <CustomBtn
            text={isPending ? "Updating..." : "Update password"}
            isSolid
            disabled={isPending}
            onClick={handleChangePassword}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePassword;
