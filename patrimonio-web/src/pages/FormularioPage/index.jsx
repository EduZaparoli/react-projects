import React, { Component } from 'react'

import { Container } from "react-bootstrap";
import Header from "../../components/Header";

import { Formik, Field, ErrorMessage } from 'formik'

class FormularioPage extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         form: {
    //             nome: '',
    //             idade: '',
    //         }
    //     }

    //     this.atualizarDadosFormulario =
    //         this.atualizarDadosFormulario.bind(this)
    // }

    // atualizarDadosFormulario(event) {
    //     // console.log(event)
    //     let form = this.state.form
    //     form[event.target.name] = event.target.value
    //     this.setState(form)
    // }

    // enviar(event) {
    //     alert('Enviado!!')

    //     event.preventDefault()
    // }

    render() {
        return (
            <>
                <Header />
                <Container>
                    <h1>Formulário</h1>
                    <hr />

                    <Formik
                        initialValues={{ nome: '', idade: '' }}
                        validate={
                            values => {
                                const erros = {}
                                if(!values.nome) {
                                    erros.nome = 'Informe seu nome'
                                }
                                return erros;
                            }
                        }
                        onSubmit={
                            (values) => {
                                console.log(values)
                                alert('enviando formik')
                            }
                        }
                    >
                        {
                            ({ values, handleSubmit, handleChange }) => (
                                <form onSubmit={handleSubmit}>
                                    Nome: <br />
                                    <Field
                                        type='text'
                                        name='nome'
                                        // value={values.nome}
                                        // onChange={handleChange}
                                    />
                                    <ErrorMessage name='nome' />
                                    <br />

                                    Idade: <br />
                                    <input
                                        type='number'
                                        name='idade'
                                        value={values.idade}
                                        onChange={handleChange}
                                    />

                                    <br /><br />

                                    <button type='submit'>Enviar</button>
                                </form>
                            )
                        }
                    </Formik>

                </Container>
            </>
        );
    }
}

export default FormularioPage;