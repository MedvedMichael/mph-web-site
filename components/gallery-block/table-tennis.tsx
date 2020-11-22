import { forwardRef, useImperativeHandle, useRef } from "react"
import styled from "styled-components"
import ImageComponent from "./image-component"


interface TableTennisProps {
    onImageClick: (src: string) => void
}

const TableTennis = forwardRef(({ onImageClick }: TableTennisProps, ref) => {
    const tennisRef = useRef()
    useImperativeHandle(ref, () => ({
        tennisRef
    }))

    return (
        <TableTennisBlock ref={tennisRef} id="table-tennis">
            <LeftBlock>
                <Text>Well, my third lovely hobby is table tennis)</Text>
                <AnimatedRacket>
                    <Ball src='pictures/ball.png' />
                    <Racket src="pictures/table-racket.png" />
                </AnimatedRacket>
            </LeftBlock>
            <ImagesGrid>
                <ImageComponent src='pictures/table-tennis1.jpg' onClick={onImageClick}/>
                <ImageComponent src='pictures/table-tennis2.jpg' onClick={onImageClick}/>
            </ImagesGrid>
        </TableTennisBlock>
    )
})

export default TableTennis

const TableTennisBlock = styled.div`
    display: flex;
    padding: 3rem;
    position: relative;
    z-index: 6;
    background: ${props => props.theme.bg.primary};
    transition: ${props => props.theme.transition.bg};
    min-height: 40rem;

    @media(max-width: 580px) {
        flex-direction: column;
    }
`
const ImagesGrid = styled.div`
    margin: auto;
    display: grid;
    grid-template-areas: 
    "picture1"
    "picture2";
    grid-template-rows: 20vw 20vw;
    grid-template-columns: 34vw;
    grid-gap: 1rem;
    flex-grow:2;
`

const Text = styled.h4`
    text-align: center;
    font-size: ${props => props.theme.fontSizes[4]};
    color: ${props => props.theme.text.primary};
`

const Racket = styled.img`
    width: 16rem;
    height: auto;
    display: block; 
    margin: auto auto 0 auto;
    
`
const Ball = styled.img`
    width: 7rem;
    height: auto;
    padding: 2rem;
    left: 50%;
    top: 25%;
    position: absolute;

    @keyframes bounce {
  from { transform: translate3d(0, 0, 0);     }
  to   { transform: translate3d(0, 200px, 0); }
}

    animation: bounce .5s;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(.5,0.05,1,.5);
    animation-iteration-count: infinite;
`

const AnimatedRacket = styled.div`
    display: flex;
    position: relative;
    height: 30rem;
`

const LeftBlock = styled.div`
    flex-grow: 3;
    display: flex;
    flex-direction: column;
`