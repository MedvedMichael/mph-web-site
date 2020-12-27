import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { RSISImage } from "react-simple-image-slider";
import styled from "styled-components"
const SimpleImageSlider = dynamic(() => import('react-simple-image-slider'), { ssr: false });

interface SliderProps {
    images: string[],
    bounds?: {
        width: string
        height: string
    },
    edit?: boolean, 
    remove?: (index: number) => void
}

export default function Slider({ images: serverImages, bounds, edit, remove }: SliderProps) {
    const [index, setIndex] = useState(0)
    const [images, setImages] = useState([])
    const imgs: RSISImage[] = images.map<RSISImage>(img => { return { url: img } })
    const [mounted, setMounted] = useState(false)

    const removeImage = () => {
        remove(index)
        setIndex(0)
    }

    useEffect(() => {
        if(!mounted) {
            setImages([...serverImages])
            setMounted(true)
        }
        else if(serverImages.length !== images.length) {
            setMounted(false)
            setImages([])
        }
    }, [serverImages, mounted])


    return imgs.length ? (
        <>
            <SliderContainer style={bounds ? { width: bounds.width, height: bounds.height } : {}} >
                <SimpleImageSlider
                    width='100%'
                    height='100%'
                    images={imgs}
                    onClickBullets={(index) => setIndex(index)}
                    onClickNav={(toRight) => setIndex(index + (toRight ? 1 : -1))}>
                </SimpleImageSlider>
            </SliderContainer>
            {edit
                ? <DeleteButtonBlock>
                    <button onClick={removeImage} className="std-button">Delete picture</button>
                </DeleteButtonBlock> 
                : null
            }
        </>
    ) : null

}

const SliderContainer = styled.div`
    position: relative;
    margin: 0 auto;

    width:80vw;
    height: 45vw;

    max-width: 60rem;
    max-height: 33.75rem;
`

const DeleteButtonBlock = styled.div`
    margin: 1rem auto 0 auto;
`