import { FC } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Button from "./UI/Buttons/Button";
import CloseButton from "./UI/Buttons/CloseButton";
import ErrorInput from "./UI/Inputs/ErrorInput";
import H2 from "./UI/H2";
import Input from "./UI/Inputs/Input";
import Modal from "./UI/Modal";
import { setUser } from "../store/reducers/UserSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "../hooks/redux";
import PasswordInput from "./UI/Inputs/PasswordInput";

const Form = styled.form`
    display: grid;

    background-color: var(--clr-light);
    width: min(80%, 38rem);
`;

const LoginCloseButton = styled(CloseButton)`
    margin: 0.5rem;
    justify-self: end;
`;

const LoginH2 = styled(H2)`
    --text-color: var(--clr-dark);
    justify-self: center;
`;

const InputsDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 75%;

    gap: 1rem;
    padding-block: 1rem;

    @media (min-width: 35em) {
        gap: 2rem;
        padding-top: 3rem;
    }
`;

const LoginButton = styled(Button)`
    width: min(80%, 20rem);
    font-size: 0.875rem;

    justify-self: center;

    @media (min-width: 35em) {
        margin-bottom: 1.5rem;
    }
`;

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
            <Form onSubmit={handleSubmit(onSubmit)}>
                <LoginCloseButton onClick={setIsOpen} />

                <LoginH2>Войти</LoginH2>

                <InputsDiv>
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
                </InputsDiv>

                <LoginButton disabled={!isValid}>Войти</LoginButton>
            </Form>
        </Modal>
    );
};

export default Login;
