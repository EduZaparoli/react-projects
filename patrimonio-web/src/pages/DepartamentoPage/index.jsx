import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Button, Table } from "react-bootstrap";
import Header from "../../components/Header";
import { useDepartamento } from "../../context/DepartamentoContext";

function DepartamentoPage() {

    const [departments, setDepartamentos] = useState([])
    const [valorInput, setValorInput] = useState('')

    function addDepartamento() {
        setDepartamentos(
            [
                ...departments,
                valorInput
            ]
        )
        setValorInput('')
    }

    const {
        contador,
        setContador,
        departamentos
    } = useDepartamento();

    return (
        <React.Fragment>
            <Header />

            <div className="container">
                <h1>Cadastro de Departamento</h1>
                
                <input type="text"
                    value={valorInput}
                    onChange={event => setValorInput(event.target.value)}
                />

                <Button variant="secondary" onClick={addDepartamento}>Novo</Button>

                <br/><br/>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            departamentos.map(
                                departments => {
                                    return <tr key={departments.id}>
                                        <td>{departments.id}</td>
                                        <td>{departments.nome}</td>
                                        <td>
                                        <Button variant="outline-secondary">Editar</Button> {' '}
                                        <Button variant="outline-secondary">Excluir</Button>
                                        </td>
                                    </tr>
                                }
                            )
                        }
                    </tbody>
                </Table>

                {/* <p>Valor atual contador: {contador}</p>

                <button onClick={
                    () => { setContador(contador + 1) }
                }>Incrementar</button> */}
            </div>
        </React.Fragment>
    )
}

export default DepartamentoPage;