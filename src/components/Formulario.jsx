import React from 'react'

const Formulario = () => {
    const [nombre, setNombre] = React.useState('')
    const [apellido, setApellido] = React.useState('')
    const [lista, setLista] = React.useState([])


    const registrarDatos = (e) => {
        e.preventDefault()
        setLista([
            ...lista,
            { nombre, apellido }
        ])
    }
    return (
        <div>
            <h1>Registro De Usuarios</h1>
            <form onSubmit={registrarDatos}>
                <input type="text"
                    placeholder='Ingrese Nombre'
                    className='form-control my-2'
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input type="text"
                    placeholder='Ingrese Apellido'
                    className='form-control my-2'
                    onChange={(e) => setApellido(e.target.value)}
                />
                <div className='d-grid gap-2'>
                    <button className="btn btn-primary my-2" type="submit">Button</button>
                </div>
            </form>
            <h1 className='text-center'>Usuarios Registrados</h1>
            <ul className='list-group'>
                {
                    lista.map((elemento, index) => (<li className='list-group-item' key={index}>{elemento.nombre} - {elemento.apellido} <button>Hola</button></li>))
                }
            </ul>
        </div>
    )
}

export default Formulario