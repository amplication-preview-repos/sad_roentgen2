import { LoginAttemptUpdateManyWithoutUsersInput } from "./LoginAttemptUpdateManyWithoutUsersInput";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  blockUntil?: Date | null;
  email?: string | null;
  firstName?: string | null;
  isBlocked?: boolean | null;
  lastName?: string | null;
  loginAttempts?: LoginAttemptUpdateManyWithoutUsersInput;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
