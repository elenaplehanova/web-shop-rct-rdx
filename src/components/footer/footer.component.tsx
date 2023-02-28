import { CopyrightText, FooterContainer, SocialMediaContainer } from "./footer.styles";

const Footer = () => {
    return (
        <FooterContainer>
            <CopyrightText> © 2023 Catharsis</CopyrightText>
            <SocialMediaContainer>
                <img src="assets/icon/instagram.svg" alt="instagram" />
                <img src="assets/icon/telegram.svg" alt="telegram" />
            </SocialMediaContainer>
        </FooterContainer>
    );
};

export default Footer;
