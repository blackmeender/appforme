import { useState } from "react"
import { Button, TextField } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import useAuth from "../hooks/AuthProvider"
import { toast, ToastContainer } from "react-toastify"

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const auth = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const from = location.state?.from?.pathname || '/'

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError('')

        try {
            await auth.signin({ email, password }, () => {
                setTimeout(() => navigate(from, { replace: true }), 2000)

            })

            toast.success('Вход выполнен')

        } catch (error) {
            setError(error)
            console.error(error)
        }
    }

    return (
        <div>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <h1>Вход</h1>
                <p>Введите логин и пароль</p>
                <div>
                    <TextField
                        type='email'
                        name="email"
                        value={email}
                        onChange={handleEmail}
                        placeholder={'Введите логин'}
                        color="success"
                    />
                </div>
                <br />
                <div>
                    <TextField
                        type='password'
                        name="password"
                        value={password}
                        onChange={handlePassword}
                        placeholder={'Введите пароль'}
                        color="success"
                    />
                </div>
                <br />
                {error && <div>{error}</div>}
                <Button variant="outlined" type="submit" color="success">Вход</Button>
            </form>
        </div>
    )
}

export default Login