import React, { Fragment, useState} from 'react';
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

const useProvincia = (label, stateInicial, opciones) => {

    //state de nuestro custom hook
    const [state,actualizarState] = useState(stateInicial);

    const Seleccionar = () => (

        <Fragment>
            <Label>{label} </Label>

            <Select
            onChange={e => actualizarState(e.target.value)}
            value={state}
            >
                <option value=""> --Seleccione Provincia-- </option>
                {opciones.map(opcion => (
                    <option key={opcion.provincias.id} value={opcion.provincias.id}> {opcion.nombre} </option>
                ))}

            </Select>
        </Fragment>
    );
    // Retornar state, interfaz y fn que modifica el state
    return [state, Seleccionar, actualizarState];
}

export default useProvincia;