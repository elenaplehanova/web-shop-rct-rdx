import { FC, useRef } from "react";
import Modal from "../UI/modal/modal.component";
import Input from "../UI/inputs/input.styles";
import ErrorInput from "../UI/inputs/error-input.styles";
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/reducers/UserSlice";
import { useAppDispatch } from "../../hooks/redux";
import PasswordInput from "../UI/inputs/password-input/password-input.component";
import {
    FormContainer,
    InputsContainer,
    StyledButton,
    StyledCloseButton,
    StyledDashedHeader,
} from "./authentication.style";
import { RegisterData } from "../../types/register-data.types";
import {
    emailRules,
    passwordRules,
    required,
} from "../../utils/react-hook-form/react-hook-form.utils";
import { RegisterErrorDescriptionMap } from "../../utils/firebase/firebase.utils";

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
                const errorDescription = RegisterErrorDescriptionMap.get(error.code);
                if (errorDescription) {
                    const [field, message] = errorDescription;
                    setError(field, { message }, { shouldFocus: true });
                }
            });
    };

    const registerPassword = {
        ...register("password", {
            ...passwordRules,
        }),
    };
    type reqisterPasswordType = typeof registerPassword;

    const registerPasswordRepeat = {
        ...register("passwordRepeat", {
            ...passwordRules,
            validate: (value) => value === password.current || "Пароли не совпадают",
        }),
    };
    type reqisterPasswordRepeatType = typeof registerPasswordRepeat;

    return (
        <Modal>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <StyledCloseButton onClick={setIsOpen} />

                <StyledDashedHeader>Регистрация</StyledDashedHeader>

                <InputsContainer>
                    <div>
                        <Input
                            {...register("email", {
                                ...emailRules,
                            })}
                            type="email"
                            placeholder="E-mail"
                        />
                        <ErrorInput>{errors.email && <p>{errors.email.message}</p>}</ErrorInput>
                    </div>

                    <div>
                        <Input
                            {...register("firstName", {
                                ...required,
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
                                ...required,
                            })}
                            placeholder="Фамилия"
                        />
                        <ErrorInput>
                            {errors.lastName && <p>{errors.lastName.message}</p>}
                        </ErrorInput>
                    </div>

                    <div>
                        <PasswordInput<reqisterPasswordType>
                            {...{ register: registerPassword, placeholder: "Новый пароль" }}
                        ></PasswordInput>
                        <ErrorInput>
                            {errors.password && <p>{errors.password.message}</p>}
                        </ErrorInput>
                    </div>

                    <div>
                        <PasswordInput<reqisterPasswordRepeatType>
                            {...{
                                register: registerPasswordRepeat,
                                placeholder: "Повторите пароль",
                            }}
                        ></PasswordInput>
                        <ErrorInput>
                            {errors.passwordRepeat && <p>{errors.passwordRepeat.message}</p>}
                        </ErrorInput>
                    </div>
                </InputsContainer>

                <StyledButton disabled={!isValid}>Зарегистрироваться</StyledButton>
            </FormContainer>
        </Modal>
    );
};

export default Register;
