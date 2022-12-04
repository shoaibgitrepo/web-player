import { format } from "date-fns";

export const hasValue = (value) => value !== null && value !== undefined;
export const pageSize = 10;

export const decodeDate = (dateEncoded) => {
  const date = new Date(dateEncoded);

  if (date === "Invalid Date") return dateEncoded;
  return format(date, "yyyy-MM-dd HH:mm:ss");
};

export const encodeDate = (dateDecoded) => {
  const date = new Date(dateDecoded);

  if (date === "Invalid Date") return dateDecoded;
  return date.toISOString();
};
