import { Link } from 'react-router-dom'

function LoginPage() {
    return(
        <>
            <h1>Página de Login</h1>
            <hr/>
            <Link to='/dashboard'>Entrar no Sistema</Link>
        </>
    );
}

export default LoginPage;