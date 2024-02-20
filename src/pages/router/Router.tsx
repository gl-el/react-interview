import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LoginPage } from '../LoginPage'
import { ProtectedPage } from '../ProtectedPage'

import FixTheRouter from '@/modules/fix-the-router'
import { ProtectedRoute } from '@/pages/router/ProtectedRoute'

export function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<FixTheRouter />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/protected' element={
                    <ProtectedRoute>
                        <ProtectedPage />
                    </ProtectedRoute>
                }/>
            </Routes>
        </BrowserRouter>
    )
}
