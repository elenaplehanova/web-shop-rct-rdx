import { useState } from "react";
import { InputDiv, StyledInput, ToggleButton } from "./password-input.styles";

interface PasswordInputProps<T> {
    register: T;
    placeholder: string;
}

const PasswordInput = <T,>(props: PasswordInputProps<T>) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const clickHandler = () => {
        setIsShowPassword((prevValue) => !prevValue);
    };

    return (
        <InputDiv>
            <StyledInput
                type={isShowPassword ? "text" : "password"}
                {...props.register}
                placeholder={props.placeholder}
            ></StyledInput>

            <ToggleButton
                type="button"
                iconName={isShowPassword ? "eye-slash-fill" : "eye-fill"}
                onClick={clickHandler}
            ></ToggleButton>
        </InputDiv>
    );
};

export default PasswordInput;
