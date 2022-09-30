import React, { useContext } from 'react'
import Contexto from './contexto/Contexto'


function Idioma() {
  const {setAlumno} = useContext(Contexto)
  const {alumno} = useContext(Contexto)
  const sustitucion = (posicion)=>{
    setAlumno(
      alumno.map((dato, indice)=>
      indice==3
      ? {...dato, idioma:posicion}
      : {...dato}
      )
    )
  }
  const cambio1=()=>{
    sustitucion(0);
  }
  const cambio2=()=>{
    sustitucion(1);
  }
  const cambio3=()=>{
    sustitucion(2);
  }
  
  return (
    <div className='idiomas'>
        <div className='banderas' onClick={cambio1}><img src='../images/spain.jpg' /></div>
        <div className='banderas' onClick={cambio2}><img src='../images/uk.png' /></div>
        <div className='banderas' onClick={cambio3}><img src='../images/francia.png' /></div>
    </div>
  )
}

export default Idioma