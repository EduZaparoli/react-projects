import React, { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios'

const PatrimonioContext = createContext()

export default function PatrimonioProvider({children}) {

    const [contador, setContador] = useState(0)
    const [patrimonios, setPatrimonios] = useState([])

    useEffect(
        () => {
            axios.get('http://localhost:9092/patrimonio/all')
                .then(
                    response => {
                        // console.log('retorno WS')
                        // console.log(response.data)
                        setPatrimonios(response.data)
                    }
                )
        }, []
    )

    return(
        <PatrimonioContext.Provider
            value={{
                contador,
                setContador,
                patrimonios
            }}
        >
            {children}
        </PatrimonioContext.Provider>
    );
}

export function usePatrimonio() {
    return useContext(PatrimonioContext)
}