import { User } from "../user/User";

export type LoginAttempt = {
  createdAt: Date;
  id: string;
  success: boolean | null;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
