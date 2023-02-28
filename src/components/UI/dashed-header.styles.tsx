import styled from "styled-components";

const DashedHeader = styled.h2`
    --text-color: var(--clr-lightdark);

    display: flex;
    font-weight: 600;
    color: var(--text-color);
    font-size: 1.5rem;

    @media (min-width: 35em) {
        font-size: 2rem;
    }

    &::before,
    ::after {
        content: "";
        background-color: var(--text-color);
        height: 0.125rem;
        width: 2ch;

        margin-inline: 0.5rem;
        margin-block: auto;
    }
`;

export default DashedHeader;
