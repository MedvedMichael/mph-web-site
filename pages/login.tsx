import { NextPage } from "next"
import { useRouter } from "next/router"
import { useState } from "react"
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
        <div style={{margin:'10%', padding:'2%'}} className="login-card card">
            <div>
                <h1>Sign in</h1>
                <div>
                    <div>
                        <input type="text" placeholder="E-mail" aria-label="Username" onChange={({ target }) => setSignInEmail(target.value)} />
                    </div>
                    <div >
                        <input type="password" placeholder="Password" aria-label="Password" onChange={({ target }) => setSignInPassword(target.value)} />
                    </div>
                    <div >
                        <button type="submit" onClick={() => onSignInButtonClick()}>Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            {signInCard}
        </div>
    )
}

export default LoginPage

