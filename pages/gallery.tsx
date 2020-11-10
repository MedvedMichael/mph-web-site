import { NextPage } from "next";
import styled from "styled-components";
import GalleryBlock from "../components/gallery-block/gallery-block";
import MainLayout from "../components/main-layout/main-layout";


const GalleryPage: NextPage = () => {

    return (
        <MainLayout title='Gallery'>
            <Title>Gallery</Title>
            <GalleryBlock />
        </MainLayout>
    )
}

export default GalleryPage

const Title = styled.h1`
    margin: 1rem auto;
    color: ${props => props.theme.text.primary};
`