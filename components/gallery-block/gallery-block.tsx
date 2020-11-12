import styled from "styled-components";
import Longboards from "./longboards";
import Programming from "./programming";

export default function GalleryBlock ({closeModal, onImageClick}) {
    return (
        <GalleryBlockView>
            <Longboards onImageClick={onImageClick} />
            <Programming />
            <Longboards onImageClick={onImageClick} />
        </GalleryBlockView>
    )
}

const GalleryBlockView = styled.div`
    display: flex;
    flex-direction: column;
`