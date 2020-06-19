import React, { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #000;
    text-transform: uppercase;
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
    border-radius: 10px;
    border: none;
    font-size:1.2rem;


`;

const useMunicipio = (label, stateInicial, opciones) => {
    
    //console.log(opciones);

    //state de nuestro customHook
    const [state, actualizarState] = useState(stateInicial)

    const SelectMunicipio = () => (
        <>
        <Label>{label}</Label>
        <Select
            onChange={e => actualizarState(e.target.value)}
            value={state}
        
        >
            {/* Por acá esta el error quizas */}
            <option value="">--Seleccione municipio--</option>
            {opciones.map(opcion => (
                <option key={opcion.municipios.provincia.id} value={opcion.municipios.nombre}
                >{opcion.municipios.nombre_completo}</option>
            ))}
        </Select>
    </>
    );
            // Retornar state, interfaz y fn que modifica el state
            return [state, SelectMunicipio, actualizarState];

}
export default useMunicipio;