import Link from "next/link";
import styled from "styled-components";
import MainLayout from "../components/main-layout/main-layout";

export default function PageNotFound() {

    return (
        <MainLayout title="404">
            <PageNotFoundView>
                <Picture src="/pictures/404.png">

                </Picture>
                <Subtitle>
                    Don't worry, there's no page)))
                </Subtitle>
                <Subtitle>
                    <Link href="/">Go to Home page</Link>
                </Subtitle>
            </PageNotFoundView>
        </MainLayout>
    )
}

const PageNotFoundView = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    align-items: center;
`
const Picture = styled.img`
    width: 50vw;
    min-width: 20rem;
    height: auto;
`

const Subtitle = styled.h1`
    text-align: center;
    color: ${props => props.theme.text.primary};
    font-size: calc(2rem + 1vw);

    

    /* animation: pulsing */
    
    & a {
        @keyframes pulsing {
            0% {
                color: #ecd798;
            }
            50% {
                color: #ffdd6c;
            }
            100% {
                color: #ecd798;
            }
        }
        animation: pulsing 2s infinite;

        
        &:hover {
            color: #ffdd6c;
            border-bottom: 1px solid #fdcb6e;
            animation: none;
        }
    }
`