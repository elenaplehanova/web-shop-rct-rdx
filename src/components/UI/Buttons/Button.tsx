import styled from "styled-components";

const Button = styled.button`
    display: block;

    border: 0;
    text-transform: uppercase;
    background-color: transparent;
    background-image: url("assets/button-background.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    width: 18rem;
    height: 5rem;

    @media (min-width: 35em) {
        width: 25rem;
    }

    &:focus:not([disabled]),
    &:hover:not([disabled]) {
        cursor: pointer;

        transition: all 0.2s;

        transform: scale(1.1);
    }
`;

export default Button;
