import { animated, useSpring } from "react-spring"
import styled from "styled-components"

interface ModalProps {
    src: string
    closeModal: () => void
}

export default function Modal ({src, closeModal}: ModalProps) {

    const backgroundAnimation = useSpring({
        from: {background: 'rgba(0,0,0,0)'},
        background: 'rgba(0,0,0,0.5)'
    })

    const modalViewAnimation = useSpring({
        from: {transform: 'translate3d(-2rem, 0, 0)', opacity: 0},
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
        delay: 80
    })
    
    const onBgClick = ({target}) => {
        if (target.id && target.id === 'modal-bg')
            closeModal()
    }
    return (
        <ModalBackground style={backgroundAnimation} id="modal-bg" onClick={onBgClick}>
            <ModalView style={modalViewAnimation}>
                <ModalImage src={src}/>
            </ModalView>
        </ModalBackground>
    )
}

const ModalBackground = styled(animated.div)`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 7;
    /* background: rgba(0,0,0,0.5); */
    display: flex;
`

const ModalView = styled(animated.div)`
    background: ${props => props.theme.bg.primary};
    width: 80vw;
    height: 45vw;

    /* top: 50%;
    /* bottom: 50%; */
    /* left: 10vw; */
    /* right: 10vw; */
    /* position: fixed; */
    display: flex;
    margin: 0 auto;
    margin-top: auto;
    margin-bottom: auto;
    z-index:8;
    /* bottom: auto; */
    /* margin: 0 auto; */

`

const ModalImage = styled.img`
    height: 40vw;
    width: auto;
    display: block;
    margin: auto;
    margin-top: auto;
`