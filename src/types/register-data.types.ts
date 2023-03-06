import { LoginData } from "./login-data.types";

export type RegisterData = LoginData & {
    firstName: string;
    lastName: string;
    passwordRepeat: string;
};
