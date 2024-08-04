import { LoginAttemptCreateNestedManyWithoutUsersInput } from "./LoginAttemptCreateNestedManyWithoutUsersInput";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  blockUntil?: Date | null;
  email?: string | null;
  firstName?: string | null;
  isBlocked?: boolean | null;
  lastName?: string | null;
  loginAttempts?: LoginAttemptCreateNestedManyWithoutUsersInput;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  username: string;
};
