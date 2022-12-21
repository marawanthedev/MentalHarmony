import { AuthUser } from "constants/AuthUser";

export type authState = {
  // todo to be handled later
  user: AuthUser | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  successAlternativeMessage: string | null;
};
