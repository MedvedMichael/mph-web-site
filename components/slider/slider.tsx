import dynamic from "next/dynamic";
import { RSISImage } from "react-simple-image-slider";
import styled from "styled-components"
const SimpleImageSlider = dynamic(() => import('react-simple-image-slider'), { ssr: false });

interface SliderProps {
    images: string[],
    bounds?: {
        width: string
        height: string
    }
}

export default function Slider ({images, bounds}: SliderProps) {

    const imgs: RSISImage[] = images.map<RSISImage>(img => {return {url: img}})

    return imgs.length ? (
        <SliderContainer style={bounds ? {width: bounds.width, height: bounds.height} : {}} >
            <SimpleImageSlider width='100%' height='100%' images={imgs}>
            </SimpleImageSlider>
        </SliderContainer>
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