import styled from "styled-components";
import Input from "./Input";
import { useState } from "react";

const InputDiv = styled.div`
    display: flex;
    border-bottom: var(--clr-lightdark) solid 0.1rem;
`;

const StyledInput = styled(Input)`
    border: 0;
`;

interface IToggleButtonProps {
    iconName: string;
}
const ToggleButton = styled.button<IToggleButtonProps>`
    padding-inline: 0.5rem;

    display: block;
    border: 0;
    background-color: transparent;
    background-image: ${(props) => `url(assets/icon/${props.iconName}.svg)`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    width: 1rem;
    aspect-ratio: 1;

    margin-inline: 0.2rem;
`;

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
