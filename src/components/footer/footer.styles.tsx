import styled from "styled-components";

export const FooterContainer = styled.footer`
    position: relative;
    text-align: center;

    color: var(--clr-white);
    background-color: var(--clr-dark);

    padding: 0.5rem;

    @media (min-width: 35em) {
        padding: 1.5rem 4rem;
    }
`;

export const SocialMediaContainer = styled.div`
    display: inline-flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;

    @media (min-width: 35em) {
        position: absolute;
        right: 15%;
        top: 0;
        bottom: 0;
    }
`;

export const CopyrightText = styled.p`
    margin: auto;
    text-transform: uppercase;
`;
