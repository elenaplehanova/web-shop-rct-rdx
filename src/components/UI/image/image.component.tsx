import { BaseImage, ImageContainer, ImageContainerProps } from "./image.styles";

interface ImageProps extends ImageContainerProps {
    src: string;
}

const Image = (props: ImageProps) => {
    return (
        <ImageContainer inset={props.inset}>
            <BaseImage src={props.src} alt="" />
        </ImageContainer>
    );
};

export default Image;
