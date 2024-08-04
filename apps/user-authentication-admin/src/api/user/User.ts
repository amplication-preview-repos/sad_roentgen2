import { LoginAttempt } from "../loginAttempt/LoginAttempt";
import { Notification } from "../notification/Notification";
import { JsonValue } from "type-fest";

export type User = {
  blockUntil: Date | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  isBlocked: boolean | null;
  lastName: string | null;
  loginAttempts?: Array<LoginAttempt>;
  notifications?: Array<Notification>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
