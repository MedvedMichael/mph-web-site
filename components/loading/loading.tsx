import styled from "styled-components"
import Spinner from '../spinner/spinner'

export default function Loading() {
    return (
        <LoadingBg>
            <LoadingView>
                {/* <SpinnerContainer> */}
                    <Spinner />
                {/* </SpinnerContainer> */}
                <LoadingText>Loading...</LoadingText>
            </LoadingView>
        </LoadingBg>
    )
}

const LoadingBg = styled.div`
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
`

const LoadingText = styled.h1`
    text-align: center;
    color: #fff;
    padding: 1rem;

`

const LoadingView = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 2rem;
`

const SpinnerContainer = styled.div`
    height: 20rem;
    position: relative;
`