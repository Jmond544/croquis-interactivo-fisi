import React, { useState } from 'react';
import { FaLocationArrow } from "react-icons/fa";
import { AiFillPushpin } from "react-icons/ai";
import { MdMyLocation } from "react-icons/md";
import '../style-sheets/TextInputs.css';

function TextInputs( { tipo, generarTrazadorRuta } ) {

  const [origen, setOrigen] = useState(null);
  const [destino, setDestino] = useState(null);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    try {
      const selectedOption = Array.from(event.target.list.options).find(
        (option) => option.value === inputValue
      );
      
      if (tipo === 'origen') {
        setOrigen(selectedOption.id);
      } else if (tipo === 'destino') {
        setDestino(selectedOption.id);
      }
    } catch (error) {
      if (tipo === 'origen') {
        setOrigen(null);
      } else if (tipo === 'destino') {
        setDestino(null);
      }
    }
  };


  return (
    <div className='container-input'>
        <div className='icon-left'>
            {tipo === 'origen' ? <MdMyLocation /> : <FaLocationArrow />}
        </div>
        <input placeholder={tipo === 'origen' ? 'Elija una ubicación de origen' : 'Elija una ubicación de destino'}
            list='ubicacionesDisponibles'
            className='custom-input'
            onChange={handleInputChange}></input>
        <datalist id='ubicacionesDisponibles' className='custom-datalist'>
            <option 
                value="Entrada 01" 
                id='entrada_1'>Primer piso</option>
            <option 
                value="Economía" 
                id='economia'>Primer piso</option>
            <option 
                value="DGA" 
                id='dga'>Primer piso</option>
            <option 
                value="Cerseu" 
                id='cerseu'>Primer piso</option>
            <option 
                value="Atención Docente" 
                id='atDoc'>Primer piso</option>
            <option 
                value="Dirección de escuela de CC" 
                id='CC'>Primer piso</option>
            <option 
                value="Aulas con código 100" 
                id='aulas100'>Primer piso</option>
            <option 
                value="Quiosco" 
                id='kiosko'>Primer piso</option>
            <option 
                value="Entrada 02" 
                id='entrada_2'>Primer piso</option>
            <option 
                value="USGOM" 
                id='USGOM'>Primer piso</option>
            <option 
                value="SSHH antiguo pabellon" 
                id='SSHH_1_1'>Primer piso</option>
            <option 
                value="Auditorio" 
                id='auditorio'>Primer piso</option>
            <option 
                value="SSHH nuevo pabellón" 
                id='SSHH_1_2'>Primer piso</option>
            <option 
                value="Aulas nuevo pabellón" 
                id='aulaNP'>Primer piso</option>
            <option 
                value="Losa deportiva" 
                id='losa'>Primer piso</option>
            <option 
                value="Capilla" 
                id='capilla'>Primer piso</option>
            <option 
                value="Vestidores" 
                id='vestidores'>Primer piso</option>
            <option 
                value="Entrada 03" 
                id='entrada_3'>Primer piso</option>
            
            <option value="Decanato" id='decanato'>Segundo piso</option>
            <option value="Comedor" id='comedor'>Segundo piso</option>
            <option value="Aula magna" id='magna'>Segundo piso</option>
            <option value="Aulas con código 200" id='aulas200'>Segundo piso</option>
            <option value="Sala catedráticos" id='salaCatedraticos'>Segundo piso</option>
            <option value="Micro data center" id='microDataCenter'>Segundo piso</option>
            <option value="Aulas nuevo pabellón 2" id='aulaNP2'>Segundo piso</option>
            <option value="Tercio" id='tercio'>Segundo piso</option>
            <option value="SSHH antiguo pabellon 2" id='SSHH_2_1'>Segundo piso</option>
            <option value="SSHH nuevo pabellon 2" id='SSHH_2_2'>Segundo piso</option>

            <option value="UNAYOE" id='UNAYOE'>Tercer piso</option>
            <option value="Dir. Sistemas" id='dirSist'>Tercer piso</option>
            <option value="Dir. Software" id='dirSoft'>Tercer piso</option>
            <option value="Matrícula" id='matricula'>Tercer piso</option>
            <option value="SSHH antiguo pabellón 3" id='SSHH_3_1'>Tercer piso</option>
            <option value="SSHH nuevo pabellón 3" id='SSHH_3_2'>Tercer piso</option>
            <option value="Salón de música" id='musica'>Tercer piso</option>
            <option value="Laboratorios nuevo pabellón 3" id='laboratoriosNP3'>Tercer piso</option>
            <option value="Publicidad" id='publicidad'>Tercer piso</option>
            <option value="Soporte" id='soporte'>Tercer piso</option>
            <option value="Departamento académico, sistemas" id='depAcaSist'>Tercer piso</option>
            <option value="Laboratorios antiguo pabellón 3, sistemas" id='laboratorios3'>Tercer piso</option>
            
        </datalist>
        <button className='inpuit-button'
                onClick={() => generarTrazadorRuta(origen, destino, tipo) }>
            <AiFillPushpin />
        </button>
    </div>
  )
}

export default TextInputs;