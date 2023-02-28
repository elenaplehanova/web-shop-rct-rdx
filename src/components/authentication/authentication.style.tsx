import styled from "styled-components";
import Button from "../UI/buttons/button.styles";
import CloseButton from "../UI/buttons/close-button.styles";
import DashedHeader from "../UI/dashed-header.styles";

export const FormContainer = styled.form`
    display: grid;
    background-color: var(--clr-light);
    width: min(80%, 38rem);
`;

export const StyledCloseButton = styled(CloseButton)`
    margin: 0.5rem;
    justify-self: end;
`;

export const StyledDashedHeader = styled(DashedHeader)`
    --text-color: var(--clr-dark);
    justify-self: center;
`;

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 75%;
    gap: 1rem;
    padding-block: 1rem;

    @media (min-width: 35em) {
        gap: 2rem;
        padding-top: 3rem;
    }
`;

export const StyledButton = styled(Button)`
    width: min(80%, 20rem);
    font-size: 0.875rem;
    justify-self: center;

    @media (min-width: 35em) {
        margin-bottom: 1.5rem;
    }
`;
