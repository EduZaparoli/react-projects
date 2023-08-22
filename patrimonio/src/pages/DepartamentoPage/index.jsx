import React from "react";
import { Button, Table, Modal } from "react-bootstrap";
import Header from "../../components/Header";
import { useDepartamento } from "../../context/DepartamentoContext";
import { useEffect, useState } from "react";
import axios from 'axios'

function DepartamentoPage() {

    const [show, setShow] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);


    const [valorInput, setValorInput] = useState('')
    const [valorInputId, setValorInputId] = useState('')

    const {
        departamentos,
    } = useDepartamento();

    function adicionarDep(){
        axios.post('http://localhost:9092/departamento', {
            nome: valorInput
        })
        .then (() => {
            if(valorInput.length === 0){
                alert('Insira um nome')
            }
            else{
                window.location.reload();
            }
        })
        .catch((error) => {
            alert('Não foi possivel adicionar o departamento')
            console.log(error)
        })
    }

    function deletarDep(id){
        axios.delete(`http://localhost:9092/departamento/${id}`)
        .then(() => {
            window.location.reload();
        })
        .catch((error) => {
            console.log(error)
        })
    }

    function atualizarDep(){
        axios.post('http://localhost:9092/departamento', {
            id: valorInputId,
            nome: valorInput
        })
        .then (() => {
            window.location.reload();
        })
        .catch((error) => {
            alert('Não foi possivel atualizar o departamento')
            console.log(error)
        })
    }

    return (
        <React.Fragment>
            <Header />

            <div className="container">
                <h1>Cadastro de Departamento</h1>
                
                <Button variant="secondary" onClick={handleShow}>Novo</Button>

                <br/><br/>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Cadastro de Departamento</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            Nome do Departamento
                            <br />
                            <input type="text" onChange={event => setValorInput(event.target.value)}/>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                        <Button variant="secondary" onClick={adicionarDep}>Salvar</Button>
                    </Modal.Footer>

                </Modal>

                <Modal show={showUpdate} onHide={handleCloseUpdate}>
                    <Modal.Header closeButton>
                        <Modal.Title>Atualizar Departamento</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            Código do Departamento
                            <br />
                            <input type="text" onChange={event => setValorInputId(event.target.value)}/>
                            <br />
                            Novo Nome
                            <br />
                            <input id="nome" type="text" onChange={event => setValorInput(event.target.value)}/>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseUpdate}>Cancelar</Button>
                        <Button variant="secondary" onClick={atualizarDep}>Salvar</Button>
                    </Modal.Footer>

                </Modal>

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
                                departamento => {
                                    return <tr key={departamento.id}>
                                        <td>{departamento.id}</td>
                                        <td>{departamento.nome}</td>
                                        <td>
                                        <Button variant="outline-secondary" onClick={handleShowUpdate}>Editar</Button> {' '}
                                        <Button variant="outline-secondary" onClick={() => deletarDep(departamento.id)}>Excluir</Button>
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