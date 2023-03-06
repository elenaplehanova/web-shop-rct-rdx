import { LoginData } from "../../types/login-data.types";
import { RegisterData } from "../../types/register-data.types";

type RegisterErrorDescription = [keyof RegisterData, string];
export const RegisterErrorDescriptionMap = new Map<string, RegisterErrorDescription>([
    ["auth/email-already-exists", ["email", "Учетная запись уже существует"]],
    ["auth/email-already-in-use", ["email", "Учетная запись уже существует"]],
]);

type LoginErrorDescription = [keyof LoginData, string];
export const LoginErrorDescriptionMap = new Map<string, LoginErrorDescription>([
    ["auth/user-not-found", ["email", "Пользователь не найден"]],
    ["auth/wrong-password", ["password", "Не верный пароль"]],
]);
