import Head from "next/head";
import { useEffect, useState, createContext } from "react";
import styled from "styled-components";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";


const MainLayout = ({ children }) => (
        <>
            <Head>
                <script src="https://kit.fontawesome.com/fc94503bd8.js" crossOrigin="anonymous"></script>
            </Head>
            <Main>
                <Navbar/>
                <MainContainer >
                    {children}
                </MainContainer>
                <Footer />
            </Main>
        </>)
    


const getStyle = async (theme: string) => fetch(process.env.API_URL + '/api/bootstrap?theme=' + theme).then(res => res.text())

export default MainLayout

const Main = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 65rem;
    background: ${props => props.theme.bg.primary};
    transition: ${props => props.theme.transition.bg};
`

const MainContainer = styled.main`
    flex-grow: 1;
`