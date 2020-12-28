import { NextPage } from "next"
import { useRouter } from "next/router"
import { useState } from "react"
import styled from "styled-components"
import MainLayout from "../components/main-layout/main-layout"
import { checkAdminCredentials } from "../services/server/admin-auth"

const LoginPage: NextPage = () => {

    const [signInEmail, setSignInEmail] = useState(''),
        [signInPassword, setSignInPassword] = useState('')

    const history = useRouter()

    const onSignInButtonClick = async () => {
        const res = checkAdminCredentials(signInEmail, signInPassword)
        if (res) {
            history.push('/')
            localStorage.setItem('isAdmin', process.env.SECRET_WORD)
        }
    }

    const signInCard = (
        <LoginBlock className="login-card card">
            <h1>Sign in</h1>
            <LoginForm onSubmit={() => onSignInButtonClick()}>
            <StyledInput type="text" placeholder="E-mail" aria-label="Username" onChange={({ target }) => setSignInEmail(target.value)} />
            <StyledInput type="password" placeholder="Password" aria-label="Password" onChange={({ target }) => setSignInPassword(target.value)} />
            <Button className="std-button" type="submit" >Login</Button>
            </LoginForm>
        </LoginBlock>
    )

    return (
        <MainLayout title="Login">
            {signInCard}
        </MainLayout>
    )
}

export default LoginPage


const LoginBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin:  5rem auto;
    color: ${props => props.theme.text.primary};
    text-align: center;

`
const StyledInput = styled.input`
    font-size: ${props => props.theme.fontSizes[3]};
    margin: .25rem;
    padding: .5rem;
    width: 50vw;
    max-width: 30rem;
`

const Button = styled.button`
    margin: 1rem auto;
    font-size: ${props => props.theme.fontSizes[2]};
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
`