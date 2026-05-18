import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import useToastMessage from "@/shared/hooks/useToastMsg";
import type { UpdateUserPayload } from "@/modules/auth/types/types";
import { updateUser } from "../services/request";
import { useUser } from "@/modules/main/settings/store/authStore";
import { queryClient } from "@/main";

export default function useEditUser() {
  const [updatedData, setupdatedData] = useState<UpdateUserPayload>({
    email: "",
    username: "",
  });

  const { toastError, toastSuccess, toastLoading } = useToastMessage();


  const { user } = useUser();
  useEffect(() => {
    if (!user) return;
    setupdatedData({
      email: user.email,
      username: user.username,
    });
  }, [user]);



  const { mutate } = useMutation({
    mutationFn: (payload: UpdateUserPayload) => updateUser(payload),
    onMutate: () => toastLoading("Updating your profile"),
    onSuccess: (data) => {
      toastSuccess(data.message);
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (error) => {
      toastError(error.message || "Something went wrong");
    },
  });

  function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    mutate(updatedData);
  }

  return { updatedData, setupdatedData, handleUpdate };
}
