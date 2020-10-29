

import styled from "styled-components";
const FooterView = () => {
    return (
        <Footer>
            <FooterContainer>
                <Row>
                    {/* <div className={styles['footer-element']}> */}
                    <FooterGroup>
                        <LocationTitle>Location</LocationTitle>
                        <h5>18G Tupoleva Street</h5>
                        <h5>Kiev, Ukraine</h5>
                    </FooterGroup>
                    <FooterGroup>
                        <h3>Contact me</h3>
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
                    </FooterGroup>
                    <FooterGroup>
                        <h3>Source</h3>
                        <a href="https://github.com/MedvedMichael/mph-web-site" target="_blank">
                            <ContactIcon aria-hidden={true} className={`fab fa-github`} />
                        </a>
                    </FooterGroup>
                </Row>
            </FooterContainer>
        </Footer>
    )
}

export default FooterView

const Footer = styled.footer`
    display: flex;
    flex-direction: row;
    background: ${props => props.theme.bg.nav};
    transition: ${props => props.theme.transition.bg};
    color: ${props => props.theme.text.primary};
    text-align: center !important;
`

const FooterContainer = styled.div`
    margin: 0 auto;
    padding: 5rem;
    width: 100%;
`

const Row = styled.div`
    display: flex;  
    flex-wrap: wrap;
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

const FooterGroup = styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-bottom: 3rem !important;
    color: ${props => props.theme.text.primary};
    @media (min-width: 992px) {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 33.3333333333%;
        flex: 0 0 33.3333333333%;
        max-width: 33.3333333333%;
    }
    /* max-width: 33.3333333333%; */
`

const LocationTitle = styled.h3`
    margin-bottom: 1rem !important; 
    text-transform: uppercase !important;
`