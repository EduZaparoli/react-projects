import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './style.css'

function Header() {
    return (
        <header>
            <Navbar expand='md'>
                <Container>
                    <Navbar.Brand>
                        LOGO
                    </Navbar.Brand>

                    <Navbar.Toggle className="toggle-icon">
                        <i className='fa fa-bars' style={{ color: 'white' }}></i>
                    </Navbar.Toggle>

                    <Navbar.Collapse className='justify-content-end'>
                        <Nav>
                            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link as={Link} to="/departamento">Departamento</Nav.Link>
                            <Nav.Link as={Link} to="/categoria">Categoria</Nav.Link>
                            <Nav.Link as={Link} to="/patrimonio">Patrimonio</Nav.Link>
                            <Nav.Link as={Link} to="/formulario">Formulário</Nav.Link>
                            <Nav.Link as={Link} to="/hooks">Hooks</Nav.Link>
                            <Navbar.Text className="divisor" />
                            <Nav.Link href="/">Sair</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>
    );
}

export default Header;