import Head from "next/head";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from './main-layout.module.css'



const MainLayout = ({ children }) => (
    <>
        <Head>
            <script src="https://kit.fontawesome.com/fc94503bd8.js" crossOrigin="anonymous"></script>
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
    </>
)

export default MainLayout