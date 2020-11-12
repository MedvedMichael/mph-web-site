import styled from "styled-components"

interface LongboardsProps {
    onImageClick: (src: string) => void
}

export default function Longboards({ onImageClick }: LongboardsProps) {
    return (
        <LongboardsBlock>
            <Title>Longboards</Title>
            <LongboardsGrid>
                <ImageComponent gridArea='main' onClick={onImageClick} src='/pictures/slide.jpg' />
                <ImageComponent gridArea='right-up' onClick={onImageClick} src='/pictures/longboard-second.jpg' />
                <ImageComponent gridArea='right-center' onClick={onImageClick} src='/pictures/longboard-third.jpg' />
                <ImageComponent gridArea='right-down' onClick={onImageClick} src='/pictures/right-down.jpg' />
                <ImageComponent gridArea='down-center-right' onClick={onImageClick} src='/pictures/longboard-4.jpg' />
                <ImageComponent gridArea='down-center-left' onClick={onImageClick} src='/pictures/longboard-5.jpg' />
                <ImageComponent gridArea='left-down' onClick={onImageClick} src='/pictures/longboard-6.jpg' />
            </LongboardsGrid>
            <Description>Longboards are my favorite hobby (after programming, of cource :)))</Description>
            <Description>The feeling when you slide down the hills at high speed is beyond words...</Description>
        </LongboardsBlock>
    )
}

interface ImageProps {
    src: string
    onClick: (src: string) => void,
    gridArea: string
}

const ImageComponent = ({ src, onClick, gridArea }: ImageProps) => {
    return (
        <ImageContainer style={{gridArea}}>
            <Image onClick={() => onClick(src)} src={src} />
        </ImageContainer>
    )
}

const LongboardsBlock = styled.div`
    /* margin: 0 auto; */
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-top: 0;
    position: relative;
    z-index: 6;
    background: ${props => props.theme.bg.primary}
`

const LongboardsGrid = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-areas: 
    "main main main right-up"
    "main main main right-up"
    "main main main right-center"
    "left-down down-center-left down-center-right right-down";
    grid-template-rows: 12vw 12vw 12vw 12vw;
    grid-template-columns: 12vw 12vw 12vw 18vw;
    grid-gap: 1rem;
    padding-bottom: 1rem;
`

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
        transform: perspective(20rem) translateZ(5px)
    }
`

const Description = styled.span`
    text-align: center;
    font-size: ${props => props.theme.fontSizes[3]};
    color: ${props => props.theme.text.primary}
`

const Title = styled.h2`
    text-align: center;
    color: ${props => props.theme.text.primary};
    padding-bottom: 1rem;
`