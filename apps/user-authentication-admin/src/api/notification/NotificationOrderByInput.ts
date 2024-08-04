import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  sentAt?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
