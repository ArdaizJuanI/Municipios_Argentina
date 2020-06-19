import React, { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Arial', cursive;
    color: #66a2fe;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
    `;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 5px;
    border-style: outset;
    font-size:1.2rem;
    background-color: #B4B4B4;


`;

const useMunicipio = (label, stateInicial, opciones) => {
    


    //state de nuestro customHook
    const [state, actualizarState] = useState(stateInicial);

    const SelectMunicipio = () => (
        <>
        <Label>{label}</Label>
        <Select
            onChange={e => actualizarState(e.target.value)}
            value={state}
        
        >
            <option value="">-- Seleccioná tu Municipio --</option>
                        {opciones.map(opcion=>(
                            <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
                        ))}
        </Select>
    </>
    );
            // Retornar state, interfaz y fn que modifica el state
            return [state, SelectMunicipio, actualizarState];

}
export default useMunicipio;