import { NextPage } from "next";
import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
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
    const mainLayoutRef = useRef()

    const galleryRef = useRef<{longboardsRef, tennisRef}>()
    const {longboardsRef, tennisRef} = galleryRef.current ? galleryRef.current : {longboardsRef: null, tennisRef: null}

    //@ts-ignore
    const scrollTo: (x: number, y: number) => void = mainLayoutRef.current ? mainLayoutRef.current.scrollTo : null

    const scrollLongboards = () =>  scrollTo ? scrollTo(0, longboardsRef.current.longboardRef.current.offsetTop - 5*16) : null
    const scrollProgramming = () => scrollTo ? scrollTo(0, longboardsRef.current.longboardRef.current.offsetHeight + 9*16) : null
    const scrollTennis = () => scrollTo ?  scrollTo(0, tennisRef.current.tennisRef.current.offsetTop - 5*16) : null

    


    return (
        <>
            <SelectMenu>
                <SelectMenuButton onClick={scrollLongboards}>Longboards</SelectMenuButton>
                <SelectMenuButton onClick={scrollProgramming}>Programming</SelectMenuButton>
                <SelectMenuButton onClick={scrollTennis}>Table Tennis</SelectMenuButton>
            </SelectMenu>
            <MainLayout ref={mainLayoutRef} Wrapper={ParallaxView} modal={modal} title='Gallery'>

                <Title>Gallery</Title>
                <GalleryBlock ref={galleryRef} onImageClick={onImageClick} />
            </MainLayout>
        </>
    )
}

export default GalleryPage

const SelectMenu = styled.div`
    position: fixed;
    top: 5.5rem;
    right: 25px;
    display: flex;
    z-index: 9;
    background: ${props => props.theme.bg.nav};
    transition: ${props => props.theme.transition.bg};
    padding: .5rem;
    border-radius: .5rem;

`

const SelectMenuButton = styled.button`
    font-size: ${props => props.theme.fontSizes[2]};
    margin: .25rem;
    background: ${props => props.theme.bg.nav};
    color: ${props => props.theme.text.primary};
    border: none;
    padding: .5rem;
    border-radius: .5rem;
    transition: ${props => props.theme.transition.bg};

    &:hover {
        background: ${props => props.theme.bg.inset};
    }
`


const Title = styled.h1`
    margin: 4.5rem auto 1rem auto;
    color: ${props => props.theme.text.primary};
`
