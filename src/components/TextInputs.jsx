import React, { useState } from 'react';
import { FaLocationArrow } from "react-icons/fa";
import { AiFillPushpin } from "react-icons/ai";
import { MdMyLocation } from "react-icons/md";
import '../style-sheets/TextInputs.css';

function TextInputs( { tipo } ) {

	const [origen, setOrigen] = useState(0);


  return (
    <div className='container-input'>
        {tipo === 'origen' ? <MdMyLocation /> : <FaLocationArrow />}
        <input placeholder={tipo === 'origen' ? 'Elija una ubicación de origen' : 'Elija una ubicación de destino'}
            list='ubicacionesDisponibles'
            className='custom-input'></input>
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
                value="" 
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
            
        </datalist>
        <button className='inpuit-button'>
            <AiFillPushpin />
        </button>
    </div>
  )
}

export default TextInputs;