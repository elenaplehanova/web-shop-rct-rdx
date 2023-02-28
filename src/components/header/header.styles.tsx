import styled from "styled-components";

export const NavigationContainer = styled.nav`
    @media (max-width: 35em) {
        ::after {
            display: block;
            content: "";
            background-color: var(--clr-dark);
            height: 0.125rem;
            width: 100%;
        }
    }
`;

export const ListsContainer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    color: var(--clr-lightdark);

    padding-top: 0.5rem;

    @media (min-width: 35em) {
        flex-wrap: nowrap;

        padding-top: 2rem;

        ::before,
        ::after {
            content: "";
            background-color: var(--clr-dark);
            height: 0.125rem;
            width: 40%;
        }
    }
`;

export const ListItem = styled.li`
    position: relative;
    list-style: none;
    text-transform: uppercase;
    font-size: 0.875rem;
    padding-inline: 0.2rem;

    @media (min-width: 35em) {
        white-space: nowrap;
    }

    &:hover,
    &:focus {
        cursor: pointer;
        box-shadow: 0 0 0.2rem var(--clr-dark);
        transition: all 0.2s;
        transform: scale(1.1);
    }

    & > a {
        text-decoration: none;
        color: inherit;
    }
`;

export const Line = styled.span`
    @media (min-width: 35em) {
        content: "";
        background-color: var(--clr-dark);
        height: 0.125rem;
        width: 100%;
    }
`;

export const SublistsContainer = styled.ul`
    position: absolute;
    top: 1.5rem;
    right: 0;
    text-align: end;
    background-color: hsl(34 100% 97% / 0.9);

    @media (min-width: 35em) {
        @supports (backdrop-filter: blur(0.5rem)) {
            background-color: hsl(0 0% 100% / 0.2);
            backdrop-filter: blur(0.5rem);
        }
    }

    & > * {
        margin: 0.3rem;
    }
`;

export const HeaderText = styled.h1`
    text-align: center;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 3rem;

    @media (min-width: 35em) {
        font-size: 6rem;
    }
`;
