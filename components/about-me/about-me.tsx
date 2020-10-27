import styled, { StyledComponent } from 'styled-components';

const AboutMe = () => {
    // console.log(avatar);
    return (
        <AboutMeSection>
            <AboutMeBlock className="container">
                <Avatar src={`${process.env.API_URL}/api/pictures/avatar.jpg`} />
                <AboutMeTitle className="light-text">Hi, my name is Michael Medvediev :)</AboutMeTitle>
                <Divider className="divider-light">
                    <DividerLine></DividerLine>
                    <ReactIcon src={`${process.env.API_URL}/api/pictures/react.png`} />
                    <DividerLine ></DividerLine>
                </Divider>
                <Title>Software Engineer - Web Developer - Musician</Title>
            </AboutMeBlock>
        </AboutMeSection>
    );
};

export default AboutMe

const AboutMeSection = styled.section`
    background-color: #1abc9c;
    padding: 2rem 0;
`
const AboutMeBlock = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin-top: 3.5rem;
`

const Avatar = styled.img`
    margin: 0 auto;
    margin-top: 2rem;
    padding-bottom: 2rem;
    width: 15rem;
`
const AboutMeTitle = styled.h1`
    display: block;
    margin: 0 auto;
    padding-bottom: 2rem;
    font-weight: bolder;
    font-size: 3.5rem;
    text-align: center;
`

const Divider = styled.div`
    margin: 1.25rem 0 1.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & .divider-custom-line {
        width: 100%;
        max-width: 7rem;
        height: 0.25rem;
        background-color: #fff;
        color: #fff !important;
        /* border-radius: 1rem;
        border-color: #2c3e50 !important; */
    }

    & .divider-custom-line:first-child {
        margin-right: 1rem;
    }

    & .divider-custom-line:last-child {
        margin-left: 1rem;
    }

    & .divider-custom-icon {
        color: #2c3e50 !important;
        font-size: 2rem;
    }

    & .divider-light .divider-custom-line {
        background-color: #fff;
    }

    & .divider-light .divider-custom-icon {
        color: #fff !important;
    }
`

const DividerLine = styled.div`
    width: 100%;
    max-width: 7rem;
    height: 0.25rem;
    background-color: #fff;
    color: #fff !important;
    
    & :first-child {
        margin-right: 1rem;
    }

    & :last-child {
        margin-left: 1rem;
    }
`

const ReactIcon = styled.img`
    width: 5rem;
    height: auto;
`

const Title = styled.h4`
    color: #fff;
    text-align: center;
`

