import styled from "styled-components";
import Button from "../UI/buttons/button.styles";

export const MainContainer = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const WelcomeText = styled.p`
    text-align: center;
    font-weight: 500;
`;

export const LogoutButton = styled(Button)`
    margin: auto;
`;

export const ButtonsContainer = styled.div`
    margin: auto;
`;
