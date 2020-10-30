import { animated, useSpring } from 'react-spring';
import styled, { StyledComponent } from 'styled-components';

const AboutMe = () => {

    const animation = useSpring({
        from: { opacity: 0 },
        opacity: 1,
        transition: 'opacity 500ms ease'
    });
    // console.log(avatar);
    return (
        <div style={{position: 'relative', marginTop:'5rem'}}>
            <AboutMeSection>
                <AboutMeBlock>
                    <Avatar src={`/pictures/avatar.jpg`} />
                    <TitleBlock style={animation}>
                        <AboutMeTitle>Michael Medvediev</AboutMeTitle>
                        <Divider>
                            <DividerLine/>
                            <ReactIcon src={`/pictures/react.png`} />
                            <DividerLine/>
                        </Divider>
                        <Title>Software Engineer - Web Developer - Musician</Title>
                    </TitleBlock>
                </AboutMeBlock>
            </AboutMeSection>
        </div>
    );
};

export default AboutMe

const AboutMeSection = styled.section`
    background: linear-gradient(to right, #5e9be0, #c8d8e3);
    padding: 2rem 0;
    &:after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, #162333, #3160d6);
        transition: opacity 0.5s ease-out;
        /* z-index: 1; */
        opacity: ${props => props.theme.dark ? 1 : 0};
        /* opacity: 1 */
    }

`
const AboutMeBlock = styled.div`
    display: flex;
    flex-direction: row-reverse;
    padding: 2rem;
    position: relative;
    z-index:3;

    @media (max-width: 630px){
        flex-direction: column;
    }
`

const TitleBlock = styled(animated.div)`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: center;
    flex-grow: 1;
`

const Avatar = styled.img`
    margin: 0 auto;
    margin-top: 2rem;
    padding-bottom: 2rem;
    width: 15rem;
    flex-grow: 1;
`
const AboutMeTitle = styled.h1`
    display: block;
    margin: 0 auto;
    font-weight: bolder;
    font-size: 3.5rem;
    text-align: center;
    color: ${props => props.theme.text.primary}
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
    font-size: 2em;
`

