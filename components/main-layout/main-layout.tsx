import Footer from "../footer/footer";
import Header from "../header/header";
import styles from './main-layout.module.css'



const MainLayout = ({children}) => (
    <div className={styles["main"]}>
        <Header />
        
        <main style={{flexGrow:1}} className={`${styles["main-container"]}`}>
            {children}
        </main>
        <Footer />
    </div>
)

export default MainLayout