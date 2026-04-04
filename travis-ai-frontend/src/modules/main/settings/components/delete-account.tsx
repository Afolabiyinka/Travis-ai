import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/modern-ui/dialog";
import { useState } from "react";
import useToastMessage from "@/lib/useToastMsg";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/auth/authStore";
import { deleteAccount } from "@/modules/main/settings/services/request";
import type { DeleteAccountPayload } from "@/modules/main/settings/types/types";
import CustomBtn from "@/components/custom/CustomBtn";
import Input from "@/modules/auth/components/Input";
import { CopyButton } from "@/components/modern-ui/copy-button";

const DeleteAccount = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [confirmPhrase, setConfirmed] = useState("");

  const { toastError, toastSuccess } = useToastMessage();
  const { user, logout } = useAuthStore();

  const deletePhrase = import.meta.env.VITE_DELETE_PHRASE;

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
    <Dialog open={openDelete} onOpenChange={setOpenDelete}>
      <DialogTrigger className="w-full" asChild>
        <CustomBtn
          text="Delete Account"
          isSolid
          endIcon="Trash"
          className="w-full bg-red-400"
        />
      </DialogTrigger>
      <DialogContent className="w-full space-y-4">
        <DialogHeader>
          <DialogTitle>
            {/* <h3 className="text-xl mb-2"> */}
            Delete Account
            {/* </h3> */}
          </DialogTitle>
          <DialogDescription>
            This action is permanent. Your account and all data will be deleted.
          </DialogDescription>
        </DialogHeader>
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

        <Input
          startIcon="Info"
          value={confirmPhrase}
          onChange={(e) => setConfirmed(e)}
          placeholder="Type the phrase to confirm"
        />

        <div className="flex gap-3 justify-end">
          <CustomBtn text="Cancel" onClick={() => setOpenDelete(false)} />

          <CustomBtn
            isSolid
            className="w-full bg-red-400"
            disabled={confirmPhrase.trim() !== deletePhrase || isPending}
            onClick={handleDelete}
            text={`${isPending ? "Deleting..." : "Delete my account"}
`}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAccount;
