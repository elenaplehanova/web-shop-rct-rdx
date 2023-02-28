import styled from "styled-components";

export interface ImageContainerProps {
    inset: string;
}

export const ImageContainer = styled.div<ImageContainerProps>`
    position: relative;
    z-index: -1;

    @media (min-width: 35em) {
        &:after {
            content: "";
            position: absolute;
            z-index: -1;
            background: transparent;
            border: 0.05rem solid var(--clr-dark);
            inset: ${(props) => props.inset};
        }
    }
`;

export const BaseImage = styled.img`
    display: block;
`;
