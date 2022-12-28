import styled from "styled-components";

const Container = styled.header`
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

    & > *:last-child:hover ul {
        display: block;
    }
`;

const Li = styled.li`
    position: relative;
    cursor: pointer;
    list-style: none;
    text-transform: uppercase;
    font-size: 0.875rem;

    @media (min-width: 35em) {
        white-space: nowrap;
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
    display: none;
    background-color: hsl(0 0% 100% / 0.9);

    @supports (backdrop-filter: blur(1rem)) {
        background-color: hsl(0 0% 100% / 0.1);

        backdrop-filter: blur(0.3rem);
    }

    & > * {
        padding: 0.3rem;
    }
`;

const Header = () => {
    return (
        <Container>
            <nav>
                <Ul>
                    <Li>О нас</Li>
                    <Li>Личный кабинет</Li>
                    <Li>Корзина</Li>
                    <Line />
                    <Li>
                        Верхняя одежда
                        <SubUl>
                            <Li>Платья</Li>
                            <Li>Юбки</Li>
                            <Li>Топы</Li>
                            <Li>Брюки</Li>
                        </SubUl>
                    </Li>
                </Ul>
            </nav>
        </Container>
    );
};

export default Header;
