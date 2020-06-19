import React , {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import imagen from './Ministerio.png';
import imagen2 from './bandera.png';
import Formulario from './components/Formulario';
import axios from 'axios';
import Spinner from './components/Spinner';
import Muestreador from './components/Muestreador';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media(min-width:992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

`;

const Imagen = styled.img`
  width: 450px;
  height: 150px;
  margin-top: 5rem;
`;
const Imagen2 = styled.img`
  width: 350px;
  height: 150px;
  margin-top: 30px;
  margin-left: 50px;
`;

const Heading = styled.h1`
  font-family: 'Arial', cursive;
  color: #66A2FE;
  text-align: left;
  font-weight: 700px;
  font-size: 40px;
  margin-bottom: 50px;
  margin-top: 120px;

  &::after {
    content: '';
    width: 100%;
    height: 3px;
    background-color: #b4b4b4;
    display: block;
  }
`;

const Parr = styled.p`
font-family: Arial, Helvetica, sans-serif;
font-size: 20px;
color: #fff;
border-style: outset;
border-color: #b4b4b4;
text-align: center;
background-color: #66A2FE;
margin-top: 50px;
padding: 20px;
`;

function App() {
    //extraer valores provincia
    const [provincia,guardarProvincia] = useState('');
    //extraer el municipio
    const [municipio, guardarMunicipio] = useState('');
  
    //trae array
    const [resultado, guardarResultado] = useState({});
  
    //spinner
    const [cargando, guardarCargando] = useState(false);
    
    useEffect(() => {
  
      const extraermunicipio = async () => {
      
        //evitar la ejecucion la primera vez --- 
      if (provincia === '') return;
  
      //consultar la api 
      const url = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincia}&id=${municipio}`;
      const resultado = await axios.get(url)
  
      //mostrar el spinner
      guardarCargando(true);
  
      //ocultar el spinner y mostrar el resultado
      setTimeout(() => {
          guardarCargando(false)
  
          //guardar resultado
        guardarResultado(resultado.data.municipios[0]);
        }, 3000);
        guardarResultado(resultado.data.municipios[0]);
      }
      extraermunicipio();
    },[provincia,municipio])
  
    //mostrar spinner o resultado
const componente = (cargando) ? <Spinner/> : <Muestreador resultado={resultado}/> 
  
  
  
  
  
  return (
    <Contenedor>
          <div>
        <Imagen
        src={imagen}
        alt='imagen ministerio'
        />
      <Parr>
       Las provincias Entre Rios, Santiago del Estero y Santa Cruz no tienen registrados sus municipios. Recuerde completar ambos campos para realizar la búsqueda.
      </Parr>
      <Imagen2
        src={imagen2}
        alt='imagen bandera'
        />
      </div>

      <div>
      <Heading>Consulta tu Municipio</Heading>
      <Formulario
      guardarProvincia={guardarProvincia}
      guardarMunicipio={guardarMunicipio}
      />
      {componente}
      </div>
    </Contenedor>
  );
}
export default App;