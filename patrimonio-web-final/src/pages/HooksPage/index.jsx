import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Header from "../../components/Header";

function HooksPage() {

    const [tarefas, setTarefas] = useState([])
    const [valorInput, setValorInput] = useState('')

    function addTarefa() {
        setTarefas(
            [
                ...tarefas,
                valorInput
            ]
        )
        setValorInput('')
    }

    const totalTarefas = useMemo(
        () => tarefas.length, [tarefas]
    )

    return (
        <>
            <Header />

            <h1>Hooks</h1>
            <hr />

            <form>
                <input type='text' name='valorInput'
                    value={valorInput}
                    onChange={event => setValorInput(event.target.value)}
                />
                <br /><br />
                <button type='button' onClick={addTarefa}>
                    Adicionar Tarefa</button>
            </form>

            <ul>
                {
                    tarefas.map(
                        tarefa => <li key={tarefa}>{tarefa}</li>
                    )
                }
            </ul>

            <br /><br />

            <strong>Você adicionou {totalTarefas} tarefas</strong>
        </>
    )


    // const [contador, setContador] = useState(0)
    // const [contadorDois, setContadorDois] = useState(10)

    // componentDidMount -> após construir o componente
    // useEffect(
    //     () => {
    // console.log('chamou a primeira vez')
    //     }, []
    // )

    // componentDidUpdate -> apos atualizar a variavel setada
    // useEffect(
    //     () => {
    // console.log('atualizou contadores')
    //     }, [contadorDois]
    // )

    // return(
    //     <>
    //         <Header />

    //         <h1>Hooks</h1>
    //         <hr/>

    {/* <p>Valor atual: {contador}</p>
            <p>Valor atual contador dois: {contadorDois}</p>

            <button onClick={
                () => { setContador(contador + 1) }
            }>Incrementar</button>

            <button onClick={
                () => { setContadorDois(contadorDois + 10) }
            }>Incrementar Contador 2</button> */}


    {/* </>
    ); */}
}

export default HooksPage;