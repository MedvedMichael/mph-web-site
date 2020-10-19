
import styles from './footer.module.css'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
export default function Footer() {
    return (
        <footer className={`${styles.footer} bg-primary text-center`}>
            <div className={`${styles["footer-container"]} container`}>
                <div className="row">
                {/* <div className={styles['footer-element']}> */}
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h3 className="light-text mb-3 text-uppercase">Location</h3>
                    <h5 className="light-text">18G Tupoleva Street</h5>
                    <h5 className="light-text">Kiev, Ukraine</h5>
                </div>
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h3 className="light-text">Contact me</h3>
                        <div className={styles["contact-me-group"]}>
                            <a href="https://t.me/medved2001" target="_blank">
                                <i aria-hidden={true} className={`fab fa-telegram-plane ${styles["contact-icon"]}`} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100006384134639" target="_blank">
                                <i aria-hidden={true} className={`fab fa-facebook ${styles["contact-icon"]}`} />
                            </a>
                            <a href="https://www.instagram.com/___mph___/" target="_blank">
                                <i aria-hidden={true} className={`fab fa-instagram ${styles["contact-icon"]}`} />
                            </a>
                            <a href="mailto:misha.medvedev2001@gmail.com" target="_blank">
                                <i aria-hidden={true} className={`fas fa-envelope-open-text ${styles["contact-icon"]}`} />
                            </a>

                            
                        </div>
                </div>
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h3 className="light-text">Location</h3>
                </div>
                </div>
            </div>
        </footer>
    )
}