import React, { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios'

const CategoriaContext = createContext()

export default function CategoriaProvider({children}) {

    const [contador, setContador] = useState(0)
    const [categorias, setCategorias] = useState([])

    useEffect(
        () => {
            axios.get('http://localhost:9092/categoria/all')
                .then(
                    response => {
                        // console.log('retorno WS')
                        // console.log(response.data)
                        setCategorias(response.data)
                    }
                )
        }, []
    )

    return(
        <CategoriaContext.Provider
            value={{
                contador,
                setContador,
                categorias
            }}
        >
            {children}
        </CategoriaContext.Provider>
    );
}

export function useCategoria() {
    return useContext(CategoriaContext)
}