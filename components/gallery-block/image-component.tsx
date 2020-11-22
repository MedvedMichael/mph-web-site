import styled from "styled-components"

interface ImageProps {
    src: string
    onClick: (src: string) => void,
    gridArea?: string
}

const ImageComponent = ({ src, onClick, gridArea }: ImageProps) => {
    return (
        <ImageContainer style={gridArea? {gridArea} : {}}>
            <Image onClick={() => onClick(src)} src={src} />
        </ImageContainer>
    )
}


export default ImageComponent

const ImageContainer = styled.div`
    position: relative;
`

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 200ms ease;

    &:hover {
        transform: scale(1.03)
    }
`
