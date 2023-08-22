import React from "react";
import { Button, Table, Modal } from "react-bootstrap";
import Header from "../../components/Header";
import { useCategoria } from "../../context/CategoriaContext";
import { useEffect, useState } from "react";
import axios from 'axios'

function CategoriaPage() {

    const [show, setShow] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);


    const [valorInput, setValorInput] = useState('')
    const [valorInputId, setValorInputId] = useState('')

    const {
        categorias,
    } = useCategoria();

    function adicionarCat(){
        axios.post('http://localhost:9092/categoria', {
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
            alert('Não foi possivel adicionar a categoria')
            console.log(error)
        })
    }

    function deletarCat(id){
        axios.delete(`http://localhost:9092/categoria/${id}`)
        .then(() => {
            window.location.reload();
        })
        .catch((error) => {
            console.log(error)
        })
    }

    function atualizarCat(id){
        axios.post('http://localhost:9092/categoria', {
            id: valorInputId,
            nome: valorInput
        })
        .then (() => {
            window.location.reload();
        })
        .catch((error) => {
            alert('Não foi possivel atualizar a categoria')
            console.log(error)
        })
    }

    return (
        <React.Fragment>
            <Header />

            <div className="container">
                <h1>Cadastro de Categorias</h1>
                
                <Button variant="secondary" onClick={handleShow}>Novo</Button>

                <br/><br/>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Cadastro de Categorias</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            Nome da categoria
                            <br />
                            <input type="text" onChange={event => setValorInput(event.target.value)}/>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                        <Button variant="secondary" onClick={adicionarCat}>Salvar</Button>
                    </Modal.Footer>

                </Modal>

                <Modal show={showUpdate} onHide={handleCloseUpdate}>
                    <Modal.Header closeButton>
                        <Modal.Title>Atualizar Categoria</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            Código da Categoria
                            <br />
                            <input id="nome" type="text" onChange={event => setValorInputId(event.target.value)}/>
                            <br />
                            Novo Nome
                            <br />
                            <input id="nome" type="text" onChange={event => setValorInput(event.target.value)}/>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseUpdate}>Cancelar</Button>
                        <Button variant="secondary" onClick={atualizarCat}>Salvar</Button>
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
                            categorias.map(
                                categoria => {
                                    return <tr key={categoria.id}>
                                        <td>{categoria.id}</td>
                                        <td>{categoria.nome}</td>
                                        <td>
                                        <Button variant="outline-secondary" onClick={handleShowUpdate}>Editar</Button> {' '}
                                        <Button variant="outline-secondary" onClick={() => deletarCat(categoria.id)}>Excluir</Button>
                                        </td>
                                    </tr>
                                }
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </React.Fragment>
    )
}

export default CategoriaPage;