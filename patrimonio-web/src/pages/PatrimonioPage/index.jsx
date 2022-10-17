import React from "react";
import { Button, Table, Modal } from "react-bootstrap";
import Header from "../../components/Header";
import { usePatrimonio } from "../../context/PatrimonioContext";
import { useEffect, useState } from "react";
import axios from 'axios'

function PatrimonioPage() {

    const [show, setShow] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);


    const [valorInput, setValorInput] = useState('')
    const [valorInputDesc, setValorInputDesc] = useState('')
    const [valorInputPreco, setValorInputPreco] = useState('')
    const [valorInputImg, setValorInputImg] = useState('')

    const {
        patrimonios,
    } = usePatrimonio();

    function adicionarPat(){
        axios.post('http://localhost:9092/patrimonio', {
            status: true,
            nome: valorInput,
            descricao: valorInputDesc,
            imagemUrl: valorInputImg,
            preco: valorInputPreco,
            departamento: {
                id: "idDep",
                nome: "nomeDep"
            },
            categoria: {
                id: "idCat",
                nome: "nomeCat"
            }
        })
        .then (() => {
            if(valorInput.length === 0){
                alert('Insira um nome')
            }
            else if(valorInputDesc.length === 0){
                alert('Insira uma descrição')
            }
            else if(valorInputPreco === 0){
                alert('Insira um valor')
            }
            else{
                window.location.reload();
            }
        })
        .catch(() => {
            alert('Não foi possivel adicionar o patrimonio')
        })
    }

    function deletarPat(id){
        axios.delete(`http://localhost:9092/patrimonio/${id}`)
        window.location.reload();
    }

    function atualizarPat(id){
        axios.post('http://localhost:9092/patrimonio', {
            id: id,
            nome: 'atualizado'
        })
        .then (() => {
            window.location.reload();
        })
        .catch(() => {
            alert('Não foi possivel atualizar o patrimonio')
        })
    }

    return (
        <React.Fragment>
            <Header />

            <div className="container">
                <h1>Cadastro de patrimonio</h1>
                
                <Button variant="secondary" onClick={handleShow}>Novo</Button>

                <br/><br/>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Cadastro de Patrimonio</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            Nome do Patrimonio
                            <br />
                            <input type="text" onChange={event => setValorInput(event.target.value)}/>
                            <br />
                            Descrição
                            <br />
                            <input type="text" onChange={event => setValorInputDesc(event.target.value)}/>
                            <br />
                            Imagem URL
                            <br />
                            <input type="text" onChange={event => setValorInputImg(event.target.value)}/>
                            <br />
                            Preço
                            <br />
                            <input type="number" onChange={event => setValorInputPreco(event.target.value)}/>
                            <br />
                            {/* Departamento
                            <br />
                            <input type="number" onChange={event => setValorInputPreco(event.target.value)}/>
                            <br />
                            Categorias
                            <br />
                            <input type="number" onChange={event => setValorInputPreco(event.target.value)}/> */}
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                        <Button variant="secondary" onClick={adicionarPat}>Salvar</Button>
                    </Modal.Footer>

                </Modal>

                <Modal show={showUpdate} onHide={handleCloseUpdate}>
                    <Modal.Header closeButton>
                        <Modal.Title>Atualizar Patrimonio</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            Novo Nome
                            <br />
                            <input id="nome" type="text" onChange={event => setValorInput(event.target.value)}/>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseUpdate}>Cancelar</Button>
                        <Button variant="secondary" onClick={atualizarPat}>Salvar</Button>
                    </Modal.Footer>

                </Modal>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            patrimonios.map(
                                patrimonio => {
                                    return <tr key={patrimonio.id}>
                                        <td>{patrimonio.id}</td>
                                        <td>{patrimonio.nome}</td>
                                        <td>{patrimonio.descricao}</td>
                                        <td>{patrimonio.preco}</td>
                                        <td>
                                        <Button variant="outline-secondary" onClick={() => atualizarPat(patrimonio.id)}>Editar</Button> {' '}
                                        <Button variant="outline-secondary" onClick={() => deletarPat(patrimonio.id)}>Excluir</Button>
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

export default PatrimonioPage;