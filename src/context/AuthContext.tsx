import { createContext, useContext, useEffect, useState } from 'react'

import { checkAuthValid } from '@/lib/auth/checkAuthValid'
import { AUTH_TIME } from '@/lib/auth/checkIsAuth'

interface ContextProps {
    isAuth: boolean
    error: string
    loginUser: (username: string, password: string) => void
    resetError: () => void
}

const AuthContext = createContext<ContextProps | null>(null)

export function AuthProvider ({ children }: { children: React.ReactNode }) {
    const [isAuth, setIsAuth] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        let timerId

        if (isAuth) {
            timerId = setTimeout(() => {
                setIsAuth(false)
                localStorage.removeItem('auth')
            }, AUTH_TIME)
        }

        return () => {
            clearTimeout(timerId)
        }
    }, [isAuth])

    const loginUser = (username: string, password: string) => {
        if (checkAuthValid({ username, password })) {
            setIsAuth(true)
            setError('')
        } else {
            setError('Username or password are incorrect')
        }
    }

    const resetError = () => { setError('') }

    return (
        <AuthContext.Provider value={{ isAuth, error, loginUser, resetError }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth () {
    const context = useContext(AuthContext)
    if (context === null) throw new Error('Context used outside of provider')
    return context
}
