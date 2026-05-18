import type { UpdateUserPayload } from "@/modules/auth/types/types";

import type { ResponseType } from "@/shared/types/response";
import { prodEndpoint, } from "@/shared/constants/api";
import type { UserResponse } from "../types/types";


const getUser = async (): Promise<UserResponse> => {
  const res = await fetch(`${prodEndpoint}/api/me`, {
    credentials: "include",
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Failed to fetch user");
  }

  return result;
};

const updateUser = async (
  payload: UpdateUserPayload
): Promise<ResponseType> => {
  const res = await fetch(`${prodEndpoint}/api/me`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    credentials: "include"
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message);
  }
  return result;
};


const deleteAccount = async () => {
  const res = await fetch(`${prodEndpoint}/api/me`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include"
  });
  const data = await res.json();
  return data;
};
export { updateUser, deleteAccount, getUser };
