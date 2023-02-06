import styled from "styled-components";
import Button from "./UI/Buttons/Button";
import { useState } from "react";
import Login from "./Login";
import H2 from "./UI/H2";
import Register from "./Register";
import { removeUser } from "../store/reducers/UserSlice";
import { useAuth } from "../hooks/use-auth";
import { useAppDispatch } from "../hooks/redux";

const H1 = styled.h1`
    font-weight: 300;
    text-transform: uppercase;
    font-size: 3rem;

    @media (min-width: 35em) {
        font-size: 6rem;
    }
`;

const H3 = styled.h3`
    text-align: center;
`;

const MainContainer = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const LogoutButton = styled(Button)`
    margin: auto;
`;

const ButtonsDiv = styled.div`
    margin: auto;
`;

const Main = () => {
    let [isOpenLogin, setIsOpenLogin] = useState(false);
    let [isOpenRegistry, setIsOpenRegistry] = useState(false);

    const dispatch = useAppDispatch();
    const { isAuth, email } = useAuth();

    return (
        <MainContainer>
            <H1>Catharsis</H1>
            <H2>Личный кабинет</H2>

            {isAuth ? (
                <div>
                    <H3>Привет, {email}!</H3>
                    <LogoutButton onClick={() => dispatch(removeUser())}>Выйти</LogoutButton>
                </div>
            ) : (
                <ButtonsDiv>
                    <Button onClick={() => setIsOpenLogin(true)}>Войти</Button>
                    <Button onClick={() => setIsOpenRegistry(true)}>Зарегистрироваться</Button>
                </ButtonsDiv>
            )}

            {isOpenLogin && <Login setIsOpen={() => setIsOpenLogin(false)} />}
            {isOpenRegistry && <Register setIsOpen={() => setIsOpenRegistry(false)} />}
        </MainContainer>
    );
};

export default Main;
