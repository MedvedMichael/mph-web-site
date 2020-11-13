import { NextPage } from "next";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GalleryBlock from "../components/gallery-block/gallery-block";
import MainLayout, { AdminContext } from "../components/main-layout/main-layout";
import Navbar from "../components/navbar/navbar";
import { ParallaxView } from "../components/parallax/parallax";
import Footer from "../components/footer/footer"
import Modal from "../components/gallery-block/modal";


const GalleryPage: NextPage = () => {

    const [isAdmin, setIsAdmin] = useState<boolean>(false)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [modalUrl, setModalUrl] = useState<string>('')

    const closeModal = () => {
        setShowModal(false)
        setModalUrl('')
    }

    const modal = showModal ? <Modal src={modalUrl} closeModal={closeModal}/> : null

    useEffect(() => {
        const check = localStorage.getItem('isAdmin')
        if(check && check === process.env.SECRET_WORD){
            setIsAdmin(true)
        }
    })

    const onImageClick = (src: string) => {
        setModalUrl(src)
        setShowModal(true)
    }

    return (
        <MainLayout Wrapper={ParallaxView} modal={modal} title='Gallery'> 
            <Title>Gallery</Title>
            <GalleryBlock onImageClick={onImageClick} closeModal={closeModal}/>
        </MainLayout>
    )
}

export default GalleryPage

const Title = styled.h1`
    margin: 1rem auto;
    color: ${props => props.theme.text.primary};
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.bg.primary};
    transition: ${props => props.theme.transition.bg};
    overflow-x: hidden;
    overflow-y: hidden;
`

const MainContainer = styled.main`
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`