import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LoginAttemptCreateInput = {
  success?: boolean | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
