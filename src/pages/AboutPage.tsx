import styled from "styled-components";
import Image from "../components/UI/Image";

const AboutDiv = styled.main`
    display: grid;
    justify-content: center;

    margin: auto;
    width: 24rem;
`;

const ImageDiv = styled.div`
    margin-inline: auto;
    display: grid;
    justify-content: center;
    align-items: end;
    gap: 1.5rem;
    grid-template-columns: 15rem;

    @media (min-width: 35em) {
        grid-template-columns: 15rem 20rem 15rem;
    }
`;

const P = styled.p`
    text-align: justify;
    font-family: var(--ff-additional);
    padding-block: 1rem;

    width: 20rem;
    margin: auto;

    @media (min-width: 35em) {
        width: 100%;
    }
`;

const P1 = styled(P)`
    text-align: center;
    border-bottom: var(--clr-lightdark) solid 0.1rem;
`;

const H3 = styled.h3`
    font-family: var(--ff-additional);
    font-size: 1.5rem;
    font-weight: 400;

    text-transform: uppercase;
    padding-block: 1.5rem 0.5rem;
    text-align: center;
`;

const H4 = styled.h4`
    font-size: 1.5rem;
    font-weight: 500;
`;

const H4_2 = styled(H4)`
    text-align: start;
    padding-top: 1rem;

    @media (min-width: 35em) {
        text-align: end;
    }
`;

const Article = styled.article`
    display: grid;
    align-items: end;
    grid-template-columns: 20rem;

    @media (min-width: 35em) {
        grid-template-columns: 35rem;
    }
`;

const AboutPage = () => {
    return (
        <AboutDiv>
            <article>
                <ImageDiv>
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
                </ImageDiv>

                <P1>
                    Баланс двух граней: Инь и Янь, черное и белое, материя и духовность. Сила в
                    объединении всех граней своей личности — для создания истинного образа будущей
                    себя. Быть сильной, и в то же время женственной. Быть открытой и сексуальной, и
                    в то же время чуткой, сдержанной. Быть разной и быть собой.
                </P1>
            </article>

            <H3>О Cartharsis</H3>

            <article>
                <H4>// The Concept</H4>
                <P>
                    CARTHARSIS — концептуальный бренд одежды для девушек, создающих свою собственную
                    реальность. А также умеющих слышать и слушать свой внутренний голос, позволяющий
                    двигаться к истинным целям с непоколебимой уверенностью. Идеология бренда
                    CARTHARSIS способствует этому. Мы создаем одежду, которая подчеркивает лучшие
                    качества души и тела. Тебе лишь остается выбрать. Выбрать по истинному отклику.
                </P>
            </article>

            <Article>
                <Image
                    {...{
                        inset: "-0.5rem 0.5rem 0.5rem -0.5rem",
                        src: "assets/about/photo4.png",
                    }}
                ></Image>
            </Article>

            <article>
                <H4_2>// The Mission</H4_2>
                <P>
                    Создавать качественную, тактильную одежду, в которой ты можешь быть собой.
                    Делать акцент на духовном развитии, просвещать девушек в тему wellness —
                    гармонии, баланса, единения души и тела. Объединять девушек по всему миру,
                    создавать сильное комьюнити творческих, самобытных, интересных. Развивать тонкое
                    чувствование себя и мира вокруг.
                </P>
            </article>
        </AboutDiv>
    );
};

export default AboutPage;
