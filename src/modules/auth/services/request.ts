import type { ResponseType } from "@/shared/types/response";
import type { LoginPayload, SignupPayload } from "../types/types";
import { prodEndpoint } from "@/shared/constants/api";


const login = async (
  payload: LoginPayload
): Promise<ResponseType> => {
  const res = await fetch(`${prodEndpoint}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include"
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
};
const signup = async (
  payload: SignupPayload
): Promise<ResponseType> => {
  const res = await fetch(`${prodEndpoint}/api/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    credentials: "include"
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
};

const logout = async (): Promise<ResponseType> => {
  const res = await fetch(`${prodEndpoint}/api/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include"
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

export { login, signup, logout };
