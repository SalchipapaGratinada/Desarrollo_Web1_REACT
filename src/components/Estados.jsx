import React, {useState} from 'react'

const Estados = () => {

    const[texto, setTexto] = useState('texto Inicial Desde Estado')
    const click = () => {
        setTexto('Texto Modificado')
    }
  return (
    <div>
        <h2>Estados</h2>
        <h3>{texto}</h3>
        <button className='btn btn-danger' onClick={() => click()}>Cambiar texto</button>
    </div>
  )
}

export default Estados