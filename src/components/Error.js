import React from 'react';
import styled from '@emotion/styled';

const MensajeError = styled.p`
    background-color: #b4b4b4;
    padding: 1rem;
    color: #66a2fe;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Arial', cursive;
    border-radius: 10px;

`;

const Error = ({mensaje}) => {
    return ( 
        <MensajeError>{mensaje}</MensajeError>
    );
}

export default Error;