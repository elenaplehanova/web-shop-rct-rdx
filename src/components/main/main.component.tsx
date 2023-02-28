import { useState } from "react";
import Login from "../authentication/login.component";
import DashedHeader from "../UI/dashed-header.styles";
import Register from "../authentication/register.component";
import { removeUser } from "../../store/reducers/UserSlice";
import { useAuth } from "../../hooks/use-auth";
import { useAppDispatch } from "../../hooks/redux";
import { ButtonsContainer, LogoutButton, MainContainer, WelcomeText } from "./main.styles";
import Button from "../UI/buttons/button.styles";

const Main = () => {
    let [isOpenLogin, setIsOpenLogin] = useState(false);
    let [isOpenRegistry, setIsOpenRegistry] = useState(false);

    const dispatch = useAppDispatch();
    const { isAuth, email } = useAuth();

    return (
        <MainContainer>
            <DashedHeader>Личный кабинет</DashedHeader>

            {isAuth ? (
                <div>
                    <WelcomeText>Привет, {email}!</WelcomeText>
                    <LogoutButton onClick={() => dispatch(removeUser())}>Выйти</LogoutButton>
                </div>
            ) : (
                <ButtonsContainer>
                    <Button onClick={() => setIsOpenLogin(true)}>Войти</Button>
                    <Button onClick={() => setIsOpenRegistry(true)}>Зарегистрироваться</Button>
                </ButtonsContainer>
            )}

            {isOpenLogin && <Login setIsOpen={() => setIsOpenLogin(false)} />}
            {isOpenRegistry && <Register setIsOpen={() => setIsOpenRegistry(false)} />}
        </MainContainer>
    );
};

export default Main;
