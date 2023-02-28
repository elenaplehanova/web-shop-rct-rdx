import styled from "styled-components";

export const MainContainer = styled.main`
    display: grid;
    justify-content: center;
    margin: auto;
    width: 24rem;
`;

export const ImageContainer = styled.div`
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

export const SingleImageContainer = styled.article`
    display: grid;
    align-items: end;
    grid-template-columns: 20rem;

    @media (min-width: 35em) {
        grid-template-columns: 35rem;
    }
`;

export const ArticleText = styled.p`
    text-align: justify;
    font-family: var(--ff-additional);
    padding-block: 1rem;
    width: 20rem;
    margin: auto;

    @media (min-width: 35em) {
        width: 100%;
    }
`;

export const StyledArticleText = styled(ArticleText)`
    text-align: center;
    border-bottom: var(--clr-lightdark) solid 0.1rem;
`;

export const MediumHeaderText = styled.h3`
    font-family: var(--ff-additional);
    font-size: 1.5rem;
    font-weight: 400;
    text-transform: uppercase;
    padding-block: 1.5rem 0.5rem;
    text-align: center;
`;

export const SmallHeaderText = styled.h4`
    font-size: 1.5rem;
    font-weight: 500;
`;

export const SmallHeaderText_End = styled(SmallHeaderText)`
    text-align: start;
    padding-top: 1rem;

    @media (min-width: 35em) {
        text-align: end;
    }
`;
