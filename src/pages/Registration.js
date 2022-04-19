import { useState } from "react"
import { Button, TextField } from "@mui/material"
import { Link, useLocation, useNavigate } from "react-router-dom"
import useAuth from "../hooks/AuthProvider"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import firebase from "../services/firebase"

const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


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
            const auth = getAuth(firebase)
            await createUserWithEmailAndPassword(auth, email, password)
        } catch {
            setError(error.message)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Регистрация</h1>
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
                <Button variant="outlined" type="submit" color="success">Регистрация</Button>
                <p>Уже есть аккаунт? <br />
                    <Link to={'/login'} className='link'>Войти</Link></p>
            </form>
        </div>
    )
}

export default Registration