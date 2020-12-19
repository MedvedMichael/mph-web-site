import { useRef, RefObject, forwardRef, useImperativeHandle } from "react";
import styled from "styled-components";
import Longboards from "./longboards";
import Programming from "./programming";
import TableTennis from './table-tennis';

type RefType = RefObject<{offsetHeight: number, offsetTop: number}>
type LongboardRefType = {longboardRef: RefType}
type ProgrammingRefType = {programmingRef: RefType}
type TennisRefType = {tennisRef: RefType}

interface GalleryBlockProps {
    onImageClick: (str: string) => void
}

const GalleryBlock = forwardRef(({ onImageClick }: GalleryBlockProps, ref) => {
    const longboardsRef = useRef<LongboardRefType>()
    const programmingRef = useRef<ProgrammingRefType>()
    const tennisRef = useRef<TennisRefType>()

    

    useImperativeHandle(ref, () => ({
        longboardsRef,
        programmingRef,
        tennisRef
    }))
    const ref1 = useRef()
    return (
        <GalleryBlockView ref={ref1}>
            <Longboards ref={longboardsRef} onImageClick={onImageClick} />
            <Programming ref={programmingRef}/>
            <TableTennis ref={tennisRef} onImageClick={onImageClick} />
        </GalleryBlockView>
    )
})

export default GalleryBlock


const GalleryBlockView = styled.div`
    display: flex;
    flex-direction: column;
    transition: ${props => props.theme.transition.bg};
`

