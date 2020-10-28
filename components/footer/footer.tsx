

import styled from "styled-components";
const FooterView = () => {
    return (
        <Footer className="text-center">
            <FooterContainer className="container">
                <div className="row">
                    {/* <div className={styles['footer-element']}> */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h3 className="light-text mb-3 text-uppercase">Location</h3>
                        <h5 className="light-text">18G Tupoleva Street</h5>
                        <h5 className="light-text">Kiev, Ukraine</h5>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h3 className="light-text">Contact me</h3>
                        <ContactMeGroup>
                            <a href="https://t.me/medved2001" target="_blank">
                                <ContactIcon aria-hidden={true} className="fab fa-telegram-plane" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100006384134639" target="_blank">
                                <ContactIcon aria-hidden={true} className="fab fa-facebook" />
                            </a>
                            <a href="https://www.instagram.com/___mph___/" target="_blank">
                                <ContactIcon aria-hidden={true} className="fab fa-instagram" />
                            </a>
                            <a href="mailto:misha.medvedev2001@gmail.com" target="_blank">
                                <ContactIcon aria-hidden={true} className="fas fa-envelope-open-text" />
                            </a>


                        </ContactMeGroup>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h3 className="light-text">Source</h3>
                        <a href="https://github.com/MedvedMichael/mph-web-site" target="_blank">
                            <ContactIcon aria-hidden={true} className={`fab fa-github`} />
                        </a>
                    </div>
                </div>
            </FooterContainer>
        </Footer>
    )
}

export default FooterView

const Footer = styled.footer`
    display: flex;
    flex-direction: row;
    background: ${props => props.theme.bg.nav}
`

const FooterContainer = styled.div`
    margin: 0 auto;
    padding: 5rem;
`

const ContactIcon = styled.i`
    font-size: x-large;
    color: #fff;
    margin: .75rem;
`

const ContactMeGroup = styled.div`
    display: block;
    margin: 0 auto;

`