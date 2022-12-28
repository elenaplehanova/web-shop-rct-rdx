import styled from "styled-components";

const H1 = styled.h1`
    font-weight: 300;
    text-transform: uppercase;
    font-size: 3rem;

    @media (min-width: 35em) {
        font-size: 6rem;
    }
`;

const H2 = styled.h2`
    display: flex;
    font-weight: 600;
    color: var(--clr-lightdark);
    font-size: 1.5rem;

    padding-bottom: 2rem;

    @media (min-width: 35em) {
        font-size: 2rem;
        padding-bottom: 4rem;
    }

    &::before,
    ::after {
        content: "";
        background-color: var(--clr-lightdark);
        height: 0.125rem;
        width: 2ch;

        margin-inline: 0.5rem;
        margin-block: auto;
    }
`;

const Button = styled.button`
    border: 0;
    text-transform: uppercase;
    background-color: transparent;
    background-image: url("assets/button-background.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    width: 100%;
    height: 4rem;
`;

const Container = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Main = () => {
    return (
        <Container>
            <H1>Catharsis</H1>
            <H2>Личный кабинет</H2>
            <Button>Войти</Button>
            <Button>Зарегистрироваться</Button>
        </Container>
    );
};

export default Main;
