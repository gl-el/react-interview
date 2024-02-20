import './styles/index.css'
import { AuthProvider } from '@/context/AuthContext'
import { Router } from '@/pages/router/Router'

function App () {
    return <div className='container'>
        <AuthProvider>
            <Router />
        </AuthProvider>
    </div>
}

export default App
