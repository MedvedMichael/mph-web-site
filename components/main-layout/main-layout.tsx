import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from './main-layout.module.css'



const MainLayout = ({ children }) => {

    const [style, setStyle] = useState('')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        getStyle(theme).then(setStyle).then(() => setMounted(true))
    }, [])



    const body = (
    <>
        <Head>
            <script src="https://kit.fontawesome.com/fc94503bd8.js" crossOrigin="anonymous"></script>
            <style>{style}</style>
            {/* <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>
    <script src="./api/firebase"></script> */}
        </Head>
        <div className={styles["main"]}>
            <Header />

            <main style={{ flexGrow: 1 }} className={`${styles["main-container"]}`}>
                {children}
            </main>
            <Footer />
        </div>
    </>)

    if (!mounted)
        return <div style={{ visibility: 'hidden' }}>{body}</div>

    return body
}

const getStyle = async (theme: string) => fetch(process.env.API_URL + '/api/bootstrap?theme=' + theme).then(res => res.text())

export default MainLayout