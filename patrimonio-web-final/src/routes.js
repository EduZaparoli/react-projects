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
import PatrimonioPage from './pages/PatrimonioPage';
import CategoriaPage from './pages/CategoriaPage';

const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<LoginPage />} />
                <Route exact path='/dashboard' element={<DashboardPage />} />
                <Route exact path='/formulario' element={<FormularioPage />} />
                <Route exact path='/hooks' element={<HooksPage />} />
                <Route exact path='/departamento' element={<DepartamentoPage />} />
                <Route exact path='/categoria' element={<CategoriaPage />} />
                <Route exact path='/patrimonio' element={<PatrimonioPage />} />

                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default RoutesApp;