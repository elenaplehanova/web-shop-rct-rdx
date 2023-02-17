import { MouseEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
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

const Ul = styled.ul`
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

const Li = styled.li`
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

const Line = styled.span`
    @media (min-width: 35em) {
        content: "";
        background-color: var(--clr-dark);
        height: 0.125rem;
        width: 100%;
    }
`;

const SubUl = styled.ul`
    position: absolute;
    top: 1.5rem;
    right: 0;
    text-align: end;
    background-color: hsl(0 0% 100% / 0.9);

    @supports (backdrop-filter: blur(1rem)) {
        background-color: hsl(0 0% 100% / 0.1);

        backdrop-filter: blur(0.3rem);
    }

    & > * {
        margin: 0.3rem;
    }
`;

const H1 = styled.h1`
    text-align: center;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 3rem;

    @media (min-width: 35em) {
        font-size: 6rem;
    }
`;

const Header = () => {
    let [isHidden, setIsHidden] = useState(true);
    let openingLi = useRef<HTMLLIElement>(null);

    function showMenu(event: MouseEvent): void {
        if (openingLi.current === event.target) {
            setIsHidden((prevValue) => !prevValue);
        }
    }

    return (
        <header>
            <Nav>
                <Ul>
                    <Li>
                        <Link to="/about">О нас</Link>
                    </Li>
                    <Li>
                        <Link to="/">Личный кабинет</Link>
                    </Li>
                    <Li>Корзина</Li>
                    <Line />
                    <Li ref={openingLi} onClick={showMenu}>
                        Верхняя одежда
                        <SubUl hidden={isHidden}>
                            <Li>Платья</Li>
                            <Li>Юбки</Li>
                            <Li>Топы</Li>
                            <Li>Брюки</Li>
                        </SubUl>
                    </Li>
                </Ul>
            </Nav>
            <H1>Catharsis</H1>
        </header>
    );
};

export default Header;
