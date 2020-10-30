
import { useState } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { VisibilityContainer } from '../visibility-container/visibility-container';

const SkillsBlock = ({ }) => {


    return (
        <SkillsBlockContainer >
            <Title>
                <VisibilityContainer from={{ transform: 'translate3d(-2rem, 0, 0)', opacity: 0 }} to={{ transform: 'translate3d(0, 0, 0)', opacity: 1 }}>
                    <h3>I'm still studying at the best faculty in KPI, Kiev (my own opinion😉)</h3>
                </VisibilityContainer>
                <VisibilityContainer from={{ transform: 'translate3d(-2rem, 0, 0)', opacity: 0 }} to={{ transform: 'translate3d(0, 0, 0)', opacity: 1 }}>
                    <h1>BUT!</h1>
                </VisibilityContainer>
                <VisibilityContainer from={{ transform: 'translate3d(-2rem, 0, 0)', opacity: 0 }} to={{ transform: 'translate3d(0, 0, 0)', opacity: 1 }}>

                    <h3>I'm already a skilled developer!😎</h3>
                </VisibilityContainer>

            </Title>


            <div>
            <SkillsBox>
                <TechCard path='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' title='JavaScript' />
                <TechCard path='https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/full/react.png' title='React' />
                <TechCard path='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' title='HTML5' />
                <TechCard path='https://cdn.worldvectorlogo.com/logos/css3.svg' title='CSS3' />
                <TechCard path='https://www.appnovation.com/sites/default/files/2019-06/techservicelogo_NodeJS.svg' title='NodeJS' />
                <TechCard path='https://digital.ai/sites/default/files/pictures/styles/maxwidth_300/public/pt_logos/mongodb.png?itok=T7Bcj44-' title='MongoDB' />
                <TechCard path='https://cdn.auth0.com/blog/logos/nextjs-logo.png' title='Next.js' />
                <TechCard path='https://cdn.iconscout.com/icon/free/png-512/redux-283024.png' title='Redux' />
                <TechCard path='https://www.styled-components.com/atom.png' title='Styled components' />
                <TechCard path='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png' title='TypeScript' />
                <TechCard path='https://www.drupal.org/files/issues/2019-12-27/heroku_logo.png' title='Heroku Deployment' />
                <TechCard path='https://installprogram.ru/wp-content/uploads/2018/04/TelegramLogo-1.png' title='Telegram Bot API' />
                <TechCard path='https://ps.w.org/custom-wp-rest-api/assets/icon-128x128.png?rev=1975404' title='REST API' />
                <TechCard path='https://cdn.auth0.com/blog/new-bootstrap4/logo.png' title='Bootstrap' />
                <TechCard path='https://diyhacking.com/wp-content/uploads/2017/04/Linux-Shell.png' title='Linux Terminal' />


            </SkillsBox>
            </div>

            <Title>
                <VisibilityContainer from={{ transform: 'translate3d(-2rem, 0, 0)', opacity: 0 }} to={{ transform: 'translate3d(0, 0, 0)', opacity: 1 }}>
                    <h3>and more...</h3>
                </VisibilityContainer>
            </Title>
        </SkillsBlockContainer>
    );
};

export default SkillsBlock

interface TechCardProps {
    path: string,
    title: string
}

const TechCard = ({ path, title }: TechCardProps) => {

    const [inverted, setInverted] = useState(false)

    const onTechCardClick = () => {
        setInverted(!inverted)
    }

    return (
        <Card style={inverted ? { transform: 'rotateY(360deg)' } : {}} onClick={onTechCardClick}>
            <VisibilityContainer from={{ transform: 'translate3d(4rem, 0, 0)', opacity: 0 }} to={{ transform: 'translate3d(0, 0, 0)', opacity: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <CardImage src={path} />
                    <CardTitle>{title}</CardTitle>
                </div>
            </VisibilityContainer>
        </Card>
    )
}




const SkillsBlockContainer = styled.div`
    background: ${props => props.theme.bg.secondary};
    transition: ${props => props.theme.transition.bg};
    display: flex;
    flex-direction: column;
    padding: 2rem;
    color: ${props => props.theme.text.primary};
    position: relative;
`

const Title = styled.div`
    text-align: center;
    margin: 0 auto;
    margin-top: 1rem;
`

const SkillsBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* justify-items: center; */
    /* justify-content: center; */
    justify-content: center;
    margin-top: 1rem;
    padding: 2% 5%;
`

const Card = styled.div`
    /* grid-template-rows: ${props => props.theme.image} */
    display: flex;
    flex-direction: column;
    transition: all 500ms ease;
    width:10%;

    @media (max-width: 1000px) {
        width:25%;
    }
    /* padding: .5rem; */
    margin: 1rem;

`

const CardImage = styled.img`
    width: 100%;
    transition: transform 200ms ease;
    &:hover {
        transform: perspective(20rem) translateZ(30px) 
        /* background: #fff; */
    }
    /* max-height: 10rem; */
    

`

const CardTitle = styled.span`
    @media (max-width: 930px) {
        font-size: .85rem;
    }
    width:100%;
    margin: 0 auto;
    margin-top: 1rem;
    text-align: center;
`
