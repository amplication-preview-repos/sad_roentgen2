import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LoginAttemptUpdateInput = {
  success?: boolean | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
