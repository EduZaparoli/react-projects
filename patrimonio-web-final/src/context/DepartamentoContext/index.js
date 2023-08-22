import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import axios from 'axios'

const DepartamentoContext = createContext()

export default function DepartamentoProvider({children}) {

    const [contador, setContador] = useState(0)
    const [departamentos, setDepartamentos] = useState([])

    useEffect(
        () => {
            axios.get('http://localhost:9092/departamento/all')
                .then(
                    response => {
                        setDepartamentos(response.data)
                    }
                )
        }, []
    )

    return(
        <DepartamentoContext.Provider
            value={{
                contador,
                setContador,
                departamentos
            }}
        >
            {children}
        </DepartamentoContext.Provider>
    );
}

export function useDepartamento() {
    return useContext(DepartamentoContext)
}