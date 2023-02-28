import Image from "../../components/UI/image/image.component";
import {
    ArticleText,
    ImageContainer,
    MainContainer,
    MediumHeaderText,
    SingleImageContainer,
    SmallHeaderText,
    SmallHeaderText_End,
    StyledArticleText,
} from "./about-page.styles";

const AboutPage = () => {
    return (
        <MainContainer>
            <article>
                <ImageContainer>
                    <Image
                        {...{
                            inset: "-0.5rem 0.5rem 0.5rem -0.5rem",
                            src: "assets/about/photo1.png",
                        }}
                    ></Image>
                    <Image
                        {...{
                            inset: "-0.5rem -0.5rem -0.5rem -0.5rem",
                            src: "assets/about/photo2.png",
                        }}
                    ></Image>
                    <Image
                        {...{
                            inset: "-0.5rem -0.5rem 0.5rem 0.5rem",
                            src: "assets/about/photo3.png",
                        }}
                    ></Image>
                </ImageContainer>

                <StyledArticleText>
                    Баланс двух граней: Инь и Янь, черное и белое, материя и духовность. Сила в
                    объединении всех граней своей личности — для создания истинного образа будущей
                    себя. Быть сильной, и в то же время женственной. Быть открытой и сексуальной, и
                    в то же время чуткой, сдержанной. Быть разной и быть собой.
                </StyledArticleText>
            </article>

            <MediumHeaderText>О Cartharsis</MediumHeaderText>

            <article>
                <SmallHeaderText>// The Concept</SmallHeaderText>
                <ArticleText>
                    CARTHARSIS — концептуальный бренд одежды для девушек, создающих свою собственную
                    реальность. А также умеющих слышать и слушать свой внутренний голос, позволяющий
                    двигаться к истинным целям с непоколебимой уверенностью. Идеология бренда
                    CARTHARSIS способствует этому. Мы создаем одежду, которая подчеркивает лучшие
                    качества души и тела. Тебе лишь остается выбрать. Выбрать по истинному отклику.
                </ArticleText>
            </article>

            <SingleImageContainer>
                <Image
                    {...{
                        inset: "-0.5rem 0.5rem 0.5rem -0.5rem",
                        src: "assets/about/photo4.png",
                    }}
                ></Image>
            </SingleImageContainer>

            <article>
                <SmallHeaderText_End>// The Mission</SmallHeaderText_End>
                <ArticleText>
                    Создавать качественную, тактильную одежду, в которой ты можешь быть собой.
                    Делать акцент на духовном развитии, просвещать девушек в тему wellness —
                    гармонии, баланса, единения души и тела. Объединять девушек по всему миру,
                    создавать сильное комьюнити творческих, самобытных, интересных. Развивать тонкое
                    чувствование себя и мира вокруг.
                </ArticleText>
            </article>
        </MainContainer>
    );
};

export default AboutPage;
