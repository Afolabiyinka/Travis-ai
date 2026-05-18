export interface User {
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserResponse {
  user: User;
}