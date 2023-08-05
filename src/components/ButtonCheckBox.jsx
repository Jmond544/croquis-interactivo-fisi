import React, { useRef } from 'react';
import '../style-sheets/ButtonCheckBox.css'
function ButtonCheckBox({tipo, setEstado}) {
  const checkboxRef = useRef(null);

  const handleCheckboxChange = () => {
    if (checkboxRef.current) {
      setEstado(checkboxRef.current.checked);
    }
  };
  return (
    <div className={`button-checkbox ${tipo}`}>
        <label>
            <input type="checkbox" ref={checkboxRef} onChange={handleCheckboxChange} defaultChecked ></input>
            <span className='list'>
                {tipo === 'piso01'? 'Piso 01' : tipo === 'piso02'? 'Piso 02' : 'Piso 03'}
            </span>
        </label>
    </div>
  )
}

export default ButtonCheckBox