import Head from "next/head";
import { useEffect, useState, createContext } from "react";
import styled from "styled-components";
import Footer from "../footer/footer";
import Header from "../header/header";


const MainLayout = ({ children }) => {

    const [style, setStyle] = useState('')
    const [mounted, setMounted] = useState(false)
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        // const theme = localStorage.getItem('theme')
        const res = localStorage.getItem('theme')
        const newTheme = res ? res : 'light'
        setTheme(newTheme)
        getStyle(newTheme).then(setStyle).then(() => setMounted(true))
    }, [])



    const body = (
        <>
            <Head>
                <script src="https://kit.fontawesome.com/fc94503bd8.js" crossOrigin="anonymous"></script>
                <style>{style}</style>
                {/* <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>
    <script src="./api/firebase"></script> */}
            </Head>

            <Main>
                <Header />

                <MainContainer >
                    {children}
                </MainContainer>
                <Footer />
            </Main>
        </>)

    if (!mounted)
        return <div style={{ visibility: 'hidden' }}>{body}</div>

    return body
}

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