import { useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { userState } from "../states/userState"
import { useForm } from "react-hook-form"

const Login = () => {
    const setUserState = useSetRecoilState(userState)
    const userData = useRecoilValue(userState)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const formSubmit = (userCredentials) => {
        // e.preventDefault()

        console.log(userCredentials);

        if (userCredentials.email !== 'admin@admin.com' || userCredentials.password !== '123456') {
            return
        }

        setUserState({
            'username': 'Admin',
            'email': userCredentials.email,
            'loggedIn': true
        })
    }

    const logoutUser = () => {
        setUserState({ ...userData, 'loggedIn': false })
        console.log(userData);
    }

    return (
        !userData.loggedIn ?
            (
                <form className="login-form" onSubmit={handleSubmit(formSubmit)} >
                    <input {...register('email')} type="text" placeholder="Please enter your email address" />
                    <input {...register('password')} type="password" placeholder="Please enter your password" />

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