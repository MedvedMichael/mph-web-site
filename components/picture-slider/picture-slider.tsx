// import WebStorageService from '../../services/web-storage-service';
import styles from './picture-slider.module.css'
import Spinner from '../spinner/spinner';
import { useEffect, useState } from 'react';

interface PictureSliderProps {
    dataURLs: string[]
}

export default function PictureSlider ({ dataURLs }: PictureSliderProps) {

    const [slides, setSlides] = useState(null),
        [slideIndex, setSlideIndex] = useState(null)

    useEffect(() => {
        initSlides()
    }, [])

    const initSlides = () => {
        const slides = (dataURLs) ? dataURLs.map((path) => {
            const img = document.createElement('img');
            img.src = path;
            return (<SlideView key={path} path={path} />)
        }) : null
        setSlides(slides)
        setSlideIndex((slideIndex && slideIndex >= 0) ? slideIndex : 0)
    }

    const changeSlideIndex = (number: number) => {
        // const { slides, slideIndex } = this.state
        const currentSlideIndex = slideIndex
        let newSlideIndex = currentSlideIndex + number

        if (newSlideIndex >= slides.length)
            newSlideIndex -= slides.length

        if (newSlideIndex < 0)
            newSlideIndex += slides.length

        setSlideIndex(newSlideIndex)
    }

    const onPrevButtonClick = () => changeSlideIndex(-1)
    const onNextButtonClick = () => changeSlideIndex(1)
    const onDotClick = (index: number) => changeSlideIndex(index - slideIndex)

    if (!slides || slides.length === 0)
        return (
            <>
                <h3 className={styles['error-message']}>There's no content</h3>
            </>
        );


    if (!slides[slideIndex])
        return <Spinner />

    const currentSlide = slides[slideIndex];
    const dots = slides.map((element: any, index: number) => {
        const isActive = index === slideIndex
        return <DotView isActive={isActive} id={index} onClick={onDotClick} key={"dot" + index} />
    });


    return (
        <div className="card">
            <div className={styles["content"]}>
                <div className={styles["slider"]}>
                    <div className={styles["wrap"]}>
                        {currentSlide}
                        <div className={styles["prev"]} onClick={onPrevButtonClick}>
                            <div className={styles["arrow-left"]}></div>
                        </div>
                        <div className={styles["next"]} onClick={onNextButtonClick}>
                            <div className={styles["arrow-right"]}></div>
                        </div>
                    </div>
                    <div className={styles["slider-dots"]}>
                        {dots}
                    </div>

                </div>
            </div>
        </div>
    );
}

interface SlideViewProps {
    path: string
}

type pictureId = number | string

interface DotViewProps {
    isActive: boolean,
    id: pictureId,
    onClick: (id: pictureId) => void
}


const SlideView = ({ path }: SlideViewProps) => (
    <div className={styles["slider-item"]}>
        <img className={styles["slider-image-item"]} src={path} alt="slider"/>
    </div>
)

const DotView = ({ isActive, id, onClick }: DotViewProps) => {
    const className = "dot" + (isActive ? " dot-active" : "")
    return (
        <div className={styles.className} onClick={() => onClick(id)}></div>
    )
}
