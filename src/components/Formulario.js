import React , {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import useProvincia from '../hooks/useProvincia';
import useMunicipio from '../hooks/useMunicipio';
import axios from 'axios';
import Error from './Error';


const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Formulario = ({guardarProvincia, guardarMunicipio}) => {


    //state del listado de municipios y provincias
    const [listadoprovincia, guardarProvincias] = useState([]);
    const [listadomunicipio, guardarMunicipios] = useState([]);
 
    const [error,guardaError] = useState(false);

//Utilizar useProvincia
const [provincia, SelectProvincia] = useProvincia('Elige tu Provincia', '', listadoprovincia);

//Utilizar useMunicipio
const [municipio, SelectMunicipio] = useMunicipio('Elige tu Municipio', '', listadomunicipio);
 

//API Provincia
    useEffect(() => {
        const consultarAPIProvincia = async() => {
        
            const url = 'https://apis.datos.gob.ar/georef/api/provincias?';
            
            const resultado = await axios.get(url);
            guardarProvincias(resultado.data.provincias);
        }
        consultarAPIProvincia()
    },[])
// API Municipio - este link lo encontramos en la pagina
    useEffect(()=>{
        const consultarMunicipios = async() => {
            if(provincia === '') return;
            const url= `https://apis.datos.gob.ar/georef/api/municipios?campos=estandar&max=1850&provincia=${provincia}`;
            const resultado= await axios.get(url);
        guardarMunicipios(resultado.data.municipios);

    }
    consultarMunicipios();
},[provincia])

//cuando el user hace un submit

const datosMunicipio = e => {
    e.preventDefault();

    //validar  si ambos campos estan llenos
    if (provincia === '' || municipio === ''){
            guardaError(true)
            return;
    }

    //pasar los datos al componente principal
    guardaError(false);
    guardarProvincia(provincia);
    guardarMunicipio(municipio);
}

return ( 
        <form
            onSubmit={datosMunicipio}

        >   {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
            <SelectProvincia/>
            <SelectMunicipio/>
        <Boton
                type="submit"
                value="Calcular"
            />
            </form>
);
}

export default Formulario;