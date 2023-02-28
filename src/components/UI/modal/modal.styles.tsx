import styled from "styled-components";

export const ModalContainer = styled.div`
    width: 100%;
    height: 100%;

    background-color: hsl(259 44% 15% / 0.6);

    position: fixed;
    top: 0;
    left: 0;

    display: grid;
    place-items: center;

    z-index: 1000;
`;
