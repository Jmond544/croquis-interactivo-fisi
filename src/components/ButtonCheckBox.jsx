import React from 'react'
import '../style-sheets/ButtonCheckBox.css'
function ButtonCheckBox({tipo}) {
  return (
    <div className={`button-checkbox ${tipo}`}>
        <label>
            <input type="checkbox"></input>
            <span className='list'>
                {tipo === 'piso01'? 'Piso 01' : tipo === 'piso02'? 'Piso 02' : 'Piso 03'}
            </span>
        </label>
    </div>
  )
}

export default ButtonCheckBox