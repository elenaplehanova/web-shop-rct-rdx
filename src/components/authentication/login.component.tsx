import { FC } from "react";
import { useForm } from "react-hook-form";
import ErrorInput from "../UI/inputs/error-input.styles";
import Input from "../UI/inputs/input.styles";
import Modal from "../UI/modal/modal.component";
import { setUser } from "../../store/reducers/UserSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "../../hooks/redux";
import PasswordInput from "../UI/inputs/password-input/password-input.component";
import {
    FormContainer,
    InputsContainer,
    StyledButton,
    StyledCloseButton,
    StyledDashedHeader,
} from "./authentication.style";

type LoginData = {
    email: string;
    password: string;
};

type LoginProps = {
    setIsOpen: () => void;
};
const Login: FC<LoginProps> = ({ setIsOpen }) => {
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid },
    } = useForm<LoginData>({
        mode: "onBlur",
    });

    const onSubmit = (data: LoginData) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;

                user.getIdToken().then((token) => {
                    dispatch(
                        setUser({
                            email: user.email ?? "",
                            id: user.uid,
                            token: token,
                        })
                    );
                });
                setIsOpen();
            })
            .catch((error) => {
                switch (error.code) {
                    case "auth/user-not-found":
                        setError(
                            "email",
                            { message: "Пользователь не найден" },
                            { shouldFocus: true }
                        );
                        break;

                    case "auth/wrong-password":
                        setError(
                            "password",
                            { message: "Не верный пароль" },
                            { shouldFocus: true }
                        );
                        break;
                }
            });
    };

    const registerPassword = {
        ...register("password", {
            required: "Поле обязательно к заполнению",
            minLength: {
                value: 6,
                message: "Минимум 6 символов",
            },
        }),
    };
    type reqisterPasswordType = typeof registerPassword;

    return (
        <Modal>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <StyledCloseButton onClick={setIsOpen} />

                <StyledDashedHeader>Войти</StyledDashedHeader>

                <InputsContainer>
                    <div>
                        <Input
                            {...register("email", {
                                required: "Поле обязательно к заполнению",
                                minLength: {
                                    value: 5,
                                    message: "Минимум 5 символов",
                                },
                            })}
                            type="email"
                            placeholder="Введите e-mail"
                        />
                        <ErrorInput>{errors.email && <p>{errors.email.message}</p>}</ErrorInput>
                    </div>

                    <div>
                        <PasswordInput<reqisterPasswordType>
                            {...{ register: registerPassword, placeholder: "Введите пароль" }}
                        ></PasswordInput>
                        <ErrorInput>
                            {errors.password && <p>{errors.password.message}</p>}
                        </ErrorInput>
                    </div>
                </InputsContainer>

                <StyledButton disabled={!isValid}>Войти</StyledButton>
            </FormContainer>
        </Modal>
    );
};

export default Login;
