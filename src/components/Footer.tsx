import styled from "styled-components";

const Container = styled.footer`
    position: relative;
    text-align: center;

    color: var(--clr-white);
    background-color: var(--clr-dark);

    padding: 0.5rem;

    @media (min-width: 35em) {
        padding: 1.5rem 4rem;
    }
`;

const ImgDiv = styled.div`
    display: inline-flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;

    @media (min-width: 35em) {
        position: absolute;
        right: 15%;
        top: 0;
        bottom: 0;
    }
`;

const P = styled.p`
    margin: auto;
    text-transform: uppercase;
`;

const Footer = () => {
    return (
        <Container>
            <P> © 2022 Cartharsis</P>
            <ImgDiv>
                <img src="assets/icon/instagram.svg" alt="instagram" />
                <img src="assets/icon/telegram.svg" alt="telegram" />
            </ImgDiv>
        </Container>
    );
};

export default Footer;
