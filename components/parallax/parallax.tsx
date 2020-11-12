import styled from "styled-components";

interface ParallaxProps {
    bgSrc: string
    content: JSX.Element
}

export default function Parallax({ bgSrc, content }: ParallaxProps) {
    return ( 
        <ParallaxGroup>
            <ParallaxContentLayer>
                <Container>
                    {content}
                </Container>
            </ParallaxContentLayer>
            <ParallaxBgLayer style={{ backgroundImage: `url(${bgSrc})` }}>
            </ParallaxBgLayer>
        </ParallaxGroup>
    )
}

export const ParallaxView = styled.div`
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    perspective: 300px;
`

const ParallaxGroup = styled.div`
    transition: transform 0.5s;
    position: relative;
    height: 100vh;
    transform-style: preserve-3d;
`

const ParallaxBgLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 4;
    transform: translateZ(-8rem) scale(2);
    min-height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const ParallaxContentLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 4;
    transform: translateZ(0);
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: auto 0;
`

const BgImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
`