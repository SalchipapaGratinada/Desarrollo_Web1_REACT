import React from 'react'

const Contador = () => {
    const [contador, setContador ] = React.useState(0)
    const mas = () => {
        setContador(contador+1)
    }
    const menos = () => {
        setContador(contador-1)
    }
  return (
    <div>
        <h2>CONTADOR</h2>
        <h3>Contador: {contador}</h3>
        <h4>
            {/* operador ternario */}
            {contador%2 === 0 ? 'Es par' : 'Es impar'}
        </h4>
        <button className='btn btn-outline-primary m-4' onClick={() => mas()}>Aumentar</button>
        <button className='btn btn-outline-danger m-4' onClick={() => menos()}>Menos</button>
    </div>
  )
}

export default Contador