import styled from "styled-components";

const CloseButton = styled.button`
    border: 0;

    background-color: transparent;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("assets/icon/close.svg");
    width: 1rem;
    aspect-ratio: 1;

    &:focus,
    &:hover {
        cursor: pointer;

        transition: all 0.2s;

        transform: scale(1.1);
    }
`;

export default CloseButton;
