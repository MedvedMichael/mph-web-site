import { useState } from "react";
import styled from "styled-components";
import Longboards from "./longboards";
import Modal from "./modal";

export default function GalleryBlock () {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [modalUrl, setModalUrl] = useState<string>('')

    const closeModal = () => {
        setShowModal(false)
        setModalUrl('')
    }

    const modal = showModal ? <Modal src={modalUrl} closeModal={closeModal}/> : null

    const onImageClick = (src: string) => {
        setModalUrl(src)
        setShowModal(true)
    }

    return (
        <GalleryBlockView>
            {modal}
            <Longboards onImageClick={onImageClick} />
            
        </GalleryBlockView>
    )
}

const GalleryBlockView = styled.div`
    display: flex;
    padding: 0 1rem;
    align-items: center;
`