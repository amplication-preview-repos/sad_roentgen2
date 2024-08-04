import { SortOrder } from "../../util/SortOrder";

export type LoginAttemptOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  success?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
