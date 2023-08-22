import { Alert, Container } from "react-bootstrap";
import Header from "../../components/Header";
import { useDepartamento } from "../../context/DepartamentoContext";
import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { usePatrimonio } from "../../context/PatrimonioContext";
import { useCategoria } from "../../context/CategoriaContext";

function DashboardPage() {
    const {
        contador,
        departamentos
    } = useDepartamento();

    const {
        patrimonios
    } = usePatrimonio();

    const {
        categorias
    } = useCategoria();


    const totalDep = useMemo(
        () => departamentos.length, [departamentos]
    )

    const totalPat = useMemo(
        () => patrimonios.length, [patrimonios]
    )

    const totalCat = useMemo(
        () => categorias.length, [categorias]
    )

    return (
        <>
            <Header />
            <Container>
                <h1>Dashboard</h1>
                <hr />
                <Alert variant='success'>Olá, Seja Bem-Vindo!!! <br />
                <p>Selecione a opção desejada no menu acima</p>
                </Alert>

                <Alert>Departamentos <br />
                    <p>{totalDep}</p>
                    <p>Departamentos Cadastrados</p>
                </Alert>
                <Alert>Categorias <br />
                    <p>{totalCat}</p>
                    <p>Categorias Cadastrados</p>
                </Alert>
                <Alert>Patrimônios <br />
                    <p>{totalPat}</p>
                    <p>Patrimõnios Cadastrados</p>
                </Alert>
            </Container>
        </>
    );
}

export default DashboardPage;