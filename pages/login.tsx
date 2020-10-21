import { NextPage } from "next"
import { useRouter } from "next/router"
import { useState } from "react"
import { checkAdminCredentials } from "../services/admin-auth"

const LoginPage: NextPage = () => {

    const [signInEmail, setSignInEmail] = useState(''),
        [signInPassword, setSignInPassword] = useState('')

    const history = useRouter()

    const onSignInButtonClick = async () => {
        const res = checkAdminCredentials(signInEmail, signInPassword)
        if (res) {
            history.push('/')
            localStorage.setItem('user',JSON.stringify({email:signInEmail, isAdmin: true}))
        }
    }



    const signInCard = (
        <div style={{margin:'10%', padding:'2%'}} className="login-card card">
            <div className="login">

                <h1 className="login-title-second">Sign in</h1>
                <div>
                    <div className="input-group input-group-lg mb-3">
                        <input type="text" className="form-control" placeholder="E-mail" aria-label="Username" onChange={({ target }) => setSignInEmail(target.value)} />

                    </div>
                    <div className="input-group input-group-lg mb-3">
                        <input type="password" className="form-control" placeholder="Password" aria-label="Password" onChange={({ target }) => setSignInPassword(target.value)} />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-secondary login-button" type="submit" onClick={() => onSignInButtonClick()}>Sign in</button>
                    </div>
                </div>

            </div>
        </div>
    )

    return (
        <div className="login-page">
            {signInCard}
        </div>
    )
}

export default LoginPage

