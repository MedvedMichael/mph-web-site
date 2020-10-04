import Footer from "../footer/footer";
import Header from "../header/header";

const MainLayout = ({children}) => (
    <>
        <Header />

        <main className="container">
            {children}
        </main>
        <Footer/>
    </>
)

export default MainLayout