import React from 'react'

const Listas = () => {
    const estadoInicial = ["Elemento1", "Elemento2", "Elemento3", "Elemento4"]
    const [lista, setLista] = React.useState(estadoInicial)
    const estadoInicialObj = [
        {id:1, texto:'elemento1'},
        {id:2, texto:'elemento2'},
        {id:3, texto:'elemento3'},
        {id:4, texto:'elemento4'}
    ]
    /* operador de propagaciob */
    const agregar=(op)=> {
        setListao([
            ...listao, /* operador de propagacion */
            {id:5, texto:'elemento'}
        ])
    }
    const [listao, setListao] = React.useState(estadoInicialObj)
    return (
        <div>
            <h1>Listas</h1>
            <ul>
                {
                    lista.map((elemento, index) => (<li key={index}>{elemento}</li>))
                }
            </ul>
            <button onClick={()=>agregar()}>Agregar</button>
            <h2>Lista Objetos</h2>
            <ol>
                {
                    listao.map((elemento) => (<li key={elemento.id}>{elemento.texto}</li>))
                }
            </ol>
        </div>
    )
}

export default Listas
