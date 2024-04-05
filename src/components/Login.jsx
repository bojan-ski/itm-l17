import { useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { userState } from "../states/userState"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const setUserState = useSetRecoilState(userState)
    const userData = useRecoilValue(userState)

    const handleSubmit = e => {
        e.preventDefault()

        if (email !== 'admin@admin.com' || password !== '123456') {
            return
        }

        setUserState({
            'username': 'Admin',
            'loggedIn': true
        })
    }

    const logoutUser = () => {
        setUserState({...userData, 'loggedIn': false})
        console.log(userData);
    }

    return (
        !userData.loggedIn ?
            (
                <form className="login-form" onSubmit={handleSubmit} >
                    <input type="text" placeholder="Please enter your email address" onInput={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Please enter your password" onInput={e => setPassword(e.target.value)} />

                    <button type="submit">
                        Login
                    </button>
                </form>
            ) : (
                <button type="submit" className="logout-btn" onClick={logoutUser}>
                    Log Out
                </button>
            )
    )
}

export default Login