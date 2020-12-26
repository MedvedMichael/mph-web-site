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
import useWindowDimensions from "../components/hooks/useWindowDimensions";


const GalleryPage: NextPage = () => {

    const [isAdmin, setIsAdmin] = useState<boolean>(false)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [modalUrl, setModalUrl] = useState<string>('')
    const [mounted, setMounted] = useState<boolean>(false)

    const closeModal = () => {
        setShowModal(false)
        setModalUrl('')
    }

    const modal = showModal ? <Modal src={modalUrl} closeModal={closeModal}/> : null

    const mainLayoutRef = useRef<HTMLElement>()

    useEffect(() => {
        const check = localStorage.getItem('isAdmin')
        if(check && check === process.env.SECRET_WORD){
            setIsAdmin(true)
        }

        if(mainLayoutRef.current) {
            setMounted(true)
        }
    }, [mainLayoutRef.current])

    const onImageClick = (src: string) => {
        setModalUrl(src)
        setShowModal(true)
    }

    type galleryRefType = { longboardsRef: React.MutableRefObject<{ longboardRef: React.MutableRefObject<HTMLElement> }>, tennisRef: React.MutableRefObject<{ tennisRef: React.MutableRefObject<HTMLElement> }> }

    const galleryRef = useRef<galleryRefType>()
    const {longboardsRef, tennisRef} = galleryRef.current ? galleryRef.current : {longboardsRef: null, tennisRef: null}

    const scrollTo: (x: number, y: number) => void = mounted ? mainLayoutRef.current.scrollTo : null
    const scrollLongboards = () =>  mounted ? scrollTo(0, longboardsRef.current.longboardRef.current.offsetTop - 5*16) : null
    const scrollProgramming = () => mounted ? scrollTo(0, longboardsRef.current.longboardRef.current.offsetHeight + 9*16) : null
    const scrollTennis = () => mounted ?  scrollTo(0, tennisRef.current.tennisRef.current.offsetTop - 5*16) : null

    const {width} = useWindowDimensions()

    return (
        <>
            <SelectMenu style={width < 450 ? {right: 8, left: 8, justifyContent: 'center', flexWrap: 'wrap'} : {}}>
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
    background: ${props => props.theme.bg.nav}E6;
    transition: ${props => props.theme.transition.bg};
    padding: .5rem;
    border-radius: .5rem;
    /* opacity:0; */

`

const SelectMenuButton = styled.button`
    font-size: ${props => props.theme.fontSizes[2]};
    margin: .25rem;
    background: ${props => props.theme.bg.nav}E6;
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
