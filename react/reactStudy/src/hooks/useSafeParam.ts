import { useParams } from "react-router-dom";

export const useSafeParam = (key: string | number): string => {
  const params = useParams();
  const value = params[key];
  if (!value) throw new Error(`Missing param: ${key}`);
  return value;
};
