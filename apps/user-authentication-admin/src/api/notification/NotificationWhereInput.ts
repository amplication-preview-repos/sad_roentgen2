import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationWhereInput = {
  id?: StringFilter;
  sentAt?: DateTimeNullableFilter;
  typeField?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
