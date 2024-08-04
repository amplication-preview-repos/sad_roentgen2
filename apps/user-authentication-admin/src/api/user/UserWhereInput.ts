import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { LoginAttemptListRelationFilter } from "../loginAttempt/LoginAttemptListRelationFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";

export type UserWhereInput = {
  blockUntil?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isBlocked?: BooleanNullableFilter;
  lastName?: StringNullableFilter;
  loginAttempts?: LoginAttemptListRelationFilter;
  notifications?: NotificationListRelationFilter;
  username?: StringFilter;
};
