import styled from "styled-components";

interface DivProps {
    inset: string;
}

interface ImageProps extends DivProps {
    src: string;
}

const Div = styled.div<DivProps>`
    position: relative;

    &:after {
        content: "";
        position: absolute;
        z-index: -1;
        background: transparent;
        border: 0.05rem solid var(--clr-dark);
        inset: ${(props) => props.inset};
    }
`;

const Img = styled.img`
    display: block;
`;

const Image = (props: ImageProps) => {
    return (
        <Div inset={props.inset}>
            <Img src={props.src} alt="" />
        </Div>
    );
};

export default Image;
