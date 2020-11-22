import Head from "next/head";
import React, { useImperativeHandle, useRef, forwardRef, Fragment } from "react";
import { useEffect, useState, createContext } from "react";
import styled from "styled-components";
import Footer from "../footer/footer";
import Loading from "../loading/loading";
import Navbar from "../navbar/navbar";

const AdminContext = createContext('')

interface MainLayoutProps {
    title: string,
    children: JSX.Element | JSX.Element[],
    Wrapper?: any,
    modal?: JSX.Element
}


const MainLayout = forwardRef(({ children, title, Wrapper = Fragment, modal = null }: MainLayoutProps, ref) => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const wrapperRef = useRef<{scrollTo: ({left, top, behavior: string}) => void}>()

    const scrollTo = (x: number, y: number) => {
        wrapperRef.current.scrollTo({
            left: x,
            top: y,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        const check = localStorage.getItem('isAdmin')
        if (check && check === process.env.SECRET_WORD) {
            setIsAdmin(true)
        }
    })

    useImperativeHandle(ref, () => ({
        scrollTo
    }))


    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Main>
                {isLoading ? <Loading /> : null}
                <AdminContext.Provider value={isAdmin ? 'admin' : ''}>
                    <Navbar startLoading={() => setIsLoading(true)} />
                    {modal}
                    {/*@ts-ignore*/}
                    <Wrapper ref={Wrapper === Fragment ? null : wrapperRef}>
                        <MainContainer>
                            {children}
                        </MainContainer>
                        <Footer />
                    </Wrapper>

                </AdminContext.Provider>
            </Main>
        </>)
})


export default MainLayout
export { AdminContext }

const Main = styled.div`
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.bg.primary};
    transition: ${props => props.theme.transition.bg};
`

const MainContainer = styled.main`
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`