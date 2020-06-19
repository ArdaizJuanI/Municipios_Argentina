import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    border-style: outset;
    color: #000;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
    margin-top: 30px;
    background-color: #b4b4b4;

`;

const Info = styled.p`
    font-size: 20px;
    span {
        font-weight: bold;
    }
`;

const Municipio = styled.p`
    font-size: 20px;
    span {
        font-weight: bold;
    }
`;

const Muestreador = ({resultado}) => {

    if(Object.keys(resultado).length === 0) return null;

    const { nombre, id, centroide} = resultado;

    return (
        <ResultadoDiv>
            <Municipio>Nombre de Municipio: <span>{nombre}</span></Municipio>
            <Info>Identificador Municipio: <span>{id}</span></Info>
            <Info>Latitud: <span> {parseFloat(centroide.lat).toFixed(2)}</span>&#x2103;</Info>
            <Info>Longitud: <span> {parseFloat(centroide.lon).toFixed(2)}</span>&#x2103;</Info>

        </ResultadoDiv>
    );
}
export default Muestreador;