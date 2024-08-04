import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  sentAt?: Date | null;
  typeField?: string | null;
  user?: UserWhereUniqueInput | null;
};
