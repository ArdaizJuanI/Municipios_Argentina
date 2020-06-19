import React , {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import imagen from './Ministerio.png';
import Formulario from './components/Formulario';
import axios from 'axios';
//import Spinner from './components/Spinner';


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
  max-width: 100%;
  margin-top: 5rem;
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
    width: 175px;
    height: 3px;
    background-color: #5a5a5a;
    display: block;
  }
`;

function App() {
    //extraer valores provincia
    const [provincia,guardarProvincia] = useState('');
    //extraer el municipio
    const [municipio, guardarMunicipio] = useState('');
  
    //trae array
    const [resultado, guardarResultado] = useState({});
  
    //spinner
    //const [cargando, guardarCargando] = useState(false);
    
    useEffect(() => {
  
      const extraermunicipio = async () => {
      
        //evitar la ejecucion la primera vez ---  triple igual ===
      if (provincia === '') return;
  
      //consultar la api / acá tamb esta la duda
      const url = `https://infra.datos.gob.ar/catalog/modernizacion/dataset/7/distribution/7.4/download/municipios.json` 
      const resultado = await axios.get(url)
  
      //mostrar el spinner
      //  guardarCargando(true);
  
      //ocultar el spinner y mostrar el resultado
      //  setTimeout(() => {
      //    guardarCargando(false)
  
          //guardar resultado
        //guardarResultado(resultado.data.DISPLAY[municipio][provincia]);
        //}, 3000);
        guardarResultado(resultado);
      }
      extraermunicipio();
    },[provincia,municipio])
  
    //mostrar spinner o resultado
   // const componente = (cargando) ? <Spinner/> : <Cotizador resultado={resultado}/> 
  
  
  
  
  
  return (
    <Contenedor>
          <div>
        <Imagen
        src={imagen}
        alt='imagen ministerio'
        />
      </div>
      <div>
      <Heading>Consulta tu Municipio</Heading>
      <Formulario
      guardarProvincia={guardarProvincia}
      guardarMunicipio={guardarMunicipio}
      />
      {/* {resultado} */}
      </div>
    </Contenedor>
  );
}
export default App;