import { Alert, Container } from "react-bootstrap";
import Header from "../../components/Header";
import { useDepartamento } from "../../context/DepartamentoContext";

function DashboardPage() {
    const {
        contador
    } = useDepartamento();

    return (
        <>
            <Header />
            <Container>
                <h1>Dashboard</h1>
                <hr />
                <Alert variant='success'>Seja Bem-Vindo!!!</Alert>

                <p>Valor do contador: {contador}</p>
            </Container>
        </>
    );
}

export default DashboardPage;