import { MouseEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
    HeaderText,
    Line,
    ListItem,
    ListsContainer,
    NavigationContainer,
    SublistsContainer,
} from "./header.styles";

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
            <NavigationContainer>
                <ListsContainer>
                    <ListItem>
                        <Link to="/about">О нас</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/">Личный кабинет</Link>
                    </ListItem>
                    <ListItem>Корзина</ListItem>
                    <Line />
                    <ListItem ref={openingLi} onClick={showMenu}>
                        Верхняя одежда
                        <SublistsContainer hidden={isHidden}>
                            <ListItem>Платья</ListItem>
                            <ListItem>Юбки</ListItem>
                            <ListItem>Топы</ListItem>
                            <ListItem>Брюки</ListItem>
                        </SublistsContainer>
                    </ListItem>
                </ListsContainer>
            </NavigationContainer>
            <HeaderText>Catharsis</HeaderText>
        </header>
    );
};

export default Header;
