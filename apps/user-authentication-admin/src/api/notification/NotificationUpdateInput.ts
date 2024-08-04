import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  sentAt?: Date | null;
  typeField?: string | null;
  user?: UserWhereUniqueInput | null;
};
