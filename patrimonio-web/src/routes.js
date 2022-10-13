import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom'

import DashboardPage from './pages/DashboardPage';
import ErrorPage from './pages/ErrorPage';
import FormularioPage from './pages/FormularioPage';
import LoginPage from './pages/LoginPage';
import HooksPage from './pages/HooksPage';
import DepartamentoPage from './pages/DepartamentoPage';

const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<LoginPage />} />
                <Route exact path='/dashboard' element={<DashboardPage />} />
                <Route exact path='/formulario' element={<FormularioPage />} />
                <Route exact path='/hooks' element={<HooksPage />} />
                <Route exact path='/departamento' element={<DepartamentoPage />} />

                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default RoutesApp;