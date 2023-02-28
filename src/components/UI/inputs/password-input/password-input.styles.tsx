import styled from "styled-components";
import Input from "../input.styles";

export const InputDiv = styled.div`
    display: flex;
    border-bottom: var(--clr-lightdark) solid 0.1rem;
`;

export const StyledInput = styled(Input)`
    border: 0;
`;

interface IToggleButtonProps {
    iconName: string;
}
export const ToggleButton = styled.button<IToggleButtonProps>`
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
