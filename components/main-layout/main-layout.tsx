
import Head from "next/head";
import { useEffect, useState, createContext } from "react";
import styled from "styled-components";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

const AdminContext = createContext('')

interface MainLayout {
    title: string,
    children: JSX.Element[]
}

const MainLayout = ({ children, title }) => {
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        const check = localStorage.getItem('isAdmin')
        if(check && check === process.env.SECRET_WORD){
            setIsAdmin(true)
        }
    })
    
    return (
        <>
            <Head>
                {/* <script src="https://kit.fontawesome.com/fc94503bd8.js" crossOrigin="anonymous"></script> */}
                <title>{title}</title>
            </Head>
            <Main>
                <AdminContext.Provider value={isAdmin ? 'admin' : ''}>
                    <Navbar />
                    <MainContainer >
                        {children}
                    </MainContainer>
                    <Footer />
                </AdminContext.Provider>
            </Main>
        </>)
}



export default MainLayout
export {AdminContext}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 65rem;
    background: ${props => props.theme.bg.primary};
    transition: ${props => props.theme.transition.bg};
`

const MainContainer = styled.main`
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`