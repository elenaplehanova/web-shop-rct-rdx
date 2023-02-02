import { FC, useRef } from "react";
import Modal from "./UI/Modal";
import styled from "styled-components";
import CloseButton from "./UI/CloseButton";
import H2 from "./UI/H2";
import Input from "./UI/Input";
import ErrorInput from "./UI/ErrorInput";
import { useForm } from "react-hook-form";
import Button from "./UI/Button";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/reducers/UserSlice";
import { useAppDispatch } from "../hooks/redux";

const Form = styled.form`
    display: grid;

    background-color: var(--clr-light);
    width: min(80%, 38rem);
`;

const RegisterCloseButton = styled(CloseButton)`
    margin: 0.5rem;
    justify-self: end;
`;

const RegisterH2 = styled(H2)`
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

const RegisterButton = styled(Button)`
    width: min(80%, 20rem);
    font-size: 0.875rem;

    justify-self: center;

    @media (min-width: 35em) {
        margin-bottom: 1.5rem;
    }
`;

type RegisterData = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    password_repeat: string;
};

type RegisterProps = {
    setIsOpen: () => void;
};
const Register: FC<RegisterProps> = ({ setIsOpen }) => {
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors, isValid },
    } = useForm<RegisterData>({
        mode: "onBlur",
    });

    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = (data: RegisterData) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(
                    setUser({
                        email: user.email ?? "",
                        id: user.uid,
                        token: user.accessToken,
                    })
                );
                setIsOpen();
            })
            .catch((error) => {
                switch (error.code) {
                    case "auth/email-already-exists":
                        setError(
                            "email",
                            { message: "Учетная запись уже существует" },
                            { shouldFocus: true }
                        );
                        break;
                }
            });
    };

    return (
        <Modal>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <RegisterCloseButton onClick={setIsOpen} />

                <RegisterH2>Регистрация</RegisterH2>

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
                            placeholder="E-mail"
                        />
                        <ErrorInput>{errors.email && <p>{errors.email.message}</p>}</ErrorInput>
                    </div>

                    <div>
                        <Input
                            {...register("firstName", {
                                required: "Поле обязательно к заполнению",
                            })}
                            placeholder="Ваше имя"
                        />
                        <ErrorInput>
                            {errors.firstName && <p>{errors.firstName.message}</p>}
                        </ErrorInput>
                    </div>

                    <div>
                        <Input
                            {...register("lastName", {
                                required: "Поле обязательно к заполнению",
                            })}
                            placeholder="Фамилия"
                        />
                        <ErrorInput>
                            {errors.lastName && <p>{errors.lastName.message}</p>}
                        </ErrorInput>
                    </div>

                    <div>
                        <Input
                            {...register("password", {
                                required: "Поле обязательно к заполнению",
                                minLength: {
                                    value: 6,
                                    message: "Минимум 6 символов",
                                },
                            })}
                            type="password"
                            placeholder="Новый пароль"
                        />
                        <ErrorInput>
                            {errors.password && <p>{errors.password.message}</p>}
                        </ErrorInput>
                    </div>

                    <div>
                        <Input
                            {...register("password_repeat", {
                                required: "Поле обязательно к заполнению",
                                minLength: {
                                    value: 6,
                                    message: "Минимум 6 символов",
                                },
                                validate: (value) =>
                                    value === password.current || "Пароли не совпадают",
                            })}
                            type="password"
                            placeholder="Повторите пароль"
                        />
                        <ErrorInput>
                            {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
                        </ErrorInput>
                    </div>
                </InputsDiv>

                <RegisterButton disabled={!isValid}>Зарегистрироваться</RegisterButton>
            </Form>
        </Modal>
    );
};

export default Register;
