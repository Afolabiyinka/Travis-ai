import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import useToastMessage from "@/lib/useToastMsg";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/auth/authStore";
import { deleteAccount } from "@/modules/main/settings/services/request";
import type { DeleteAccountPayload } from "@/modules/main/settings/types/types";
import CustomBtn from "@/components/custom/CustomBtn";
import { CopyButton } from "@/components/custom/copy-button";
import { cardStyle } from "@/css-variables/css-variables";
import CustomInput from "@/components/custom/custom-input";

const DeleteAccount = () => {
  const [confirmPhrase, setConfirmed] = useState("");

  const { toastError, toastSuccess } = useToastMessage();
  const { user, logout } = useAuthStore();

  const deletePhrase = "delete my account";

  const { mutate, isPending } = useMutation({
    mutationFn: (payload: DeleteAccountPayload) => deleteAccount(payload),
    onSuccess: () => {
      toastSuccess("Account deleted successfully");
      logout();
      window.location.href = "/login";
    },
    onError: () => toastError("Failed to delete account, pls try again later"),
  });

  const handleDelete = () => {
    if (confirmPhrase.trim() !== deletePhrase) {
      toastError("Confirmation phrase does not match");
      return;
    }

    if (!user?._id) {
      toastError("User not found");
      return;
    }

    mutate({ id: user._id });
  };

  return (
    <Card className={cardStyle}>
      <CardHeader>
        <CardTitle>
          Delete Account
        </CardTitle>
        <CardDescription>
          This action is permanent. Your account and all data will be deleted.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full space-y-4">

        <div className="flex gap-2 items-center">
          <p className="text-left">
            Type{" "}
            <span className="rounded-sm px-1 py-0.5 border">
              {deletePhrase}
            </span>{" "}
            in the box below
          </p>
          <CopyButton value={deletePhrase} />
        </div>

        <CustomInput
          startIcon="Info"
          value={confirmPhrase}
          onChange={(e) => setConfirmed(e)}
          placeholder="Type the phrase to confirm"
        />

        <div className="flex gap-3 justify-end">

          <span>
            <CustomBtn

              variant={`destructive`}
              disabled={confirmPhrase.trim() !== deletePhrase || isPending}
              onClick={handleDelete}
              text={`${isPending ? "Deleting..." : "Delete my account"}
`}
            />
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeleteAccount;
