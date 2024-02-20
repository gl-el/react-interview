import { Navigate } from 'react-router'

import { useAuth } from '@/context/AuthContext'

export function ProtectedRoute ({ children }: { children: React.ReactNode }) {
    const { isAuth } = useAuth()
    if (!isAuth) {
        return <Navigate to={'/'} replace/>
    }
    return children
}
