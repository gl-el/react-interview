import { type FormEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '@/context/AuthContext'
import { ErrorMessage } from '@/ui/ErrorMessage'
import { FormInput } from '@/ui/FormInput'

export function Form () {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const { isAuth, error, loginUser, resetError } = useAuth()

    useEffect(() => {
        resetError()
    }, [username, password])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        loginUser(username, password)
    }

    return (
        <div className='block'>
            <form className='block' onSubmit={handleSubmit}>
                <FormInput type='text' placeholder={'Enter your username'} onChange={(e) => { setUserName(e.target.value) }} value={username}>
                Username
                </FormInput>
                <FormInput type='password' placeholder={'Enter your password'} onChange={(e) => { setPassword(e.target.value) }} value={password}>
                Password
                </FormInput>
                <button>
                Submit
                </button>
            </form>
            {isAuth && <div><Link to={'/protected'} className='navLink'>Go to the protected route</Link></div>}
            {(error !== '') && <ErrorMessage>{error}</ErrorMessage>}
        </div>
    )
}
