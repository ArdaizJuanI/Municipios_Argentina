import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: #000;
    font-family: Arial, Helvetica, sans-serif;

`;

const Info = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight: bold;
    }
`;

const Muestreador = ({resultado}) => {

    if(Object.keys(resultado).length === 0) return null;

    return (
        <ResultadoDiv>
            <Precio>Nombre de Municipio: <span>{resultado.nombre}</span></Precio>
            <Info>Precio más alto del día: <span>{resultado.HIGHDAY}</span></Info>
            <Info>Precio más bajo del día: <span>{resultado.LOWDAY}</span></Info>
            <Info>Variacion 24hs: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Última actualización: <span>{resultado.LASTUPDATE}</span></Info>
        </ResultadoDiv>
    );
}
export default Muestreador;