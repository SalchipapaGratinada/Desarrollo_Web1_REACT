import React from 'react'

const Formulario = () => {

    const [id, setId] = React.useState(0)
    const [vr, setVr] = React.useState(0)
    const [edicion, setEdicion] = React.useState(false)
    const [nombre, setNombre] = React.useState('')
    const [apellido, setApellido] = React.useState('')
    const [lista, setLista] = React.useState([])


    const registrarDatos = (e) => {
        e.preventDefault()
        if(nombre.value === "" || apellido === ""){
            return alert("Campos Vacios");
        }else{
            if(edicion){
                const arrayEditado = lista.map(item => item.id === id ? {id, nombre, apellido} : item)
                setLista(arrayEditado)
                setEdicion(false)
                setNombre('')
                setApellido('')
                setId(vr)
                vaciarInput()
            }else{
                setLista([
                    ...lista,
                    { id, nombre, apellido }
                ])
                setId(id+1)
                setVr(vr+1)
                setNombre('')
                setApellido('')
                vaciarInput()
            }
           
        }
        
    }
    const vaciarInput = () => {
        const inputN =document.getElementById('nombre');
        inputN.value='';
        const inputA =document.getElementById('apellido');
        inputA.value='';
    }
    const llenarInput = (elemento) => {
        const inputN =document.getElementById('nombre');
        inputN.value=elemento.nombre;
        const inputA =document.getElementById('apellido');
        inputA.value=elemento.apellido;
    }


    const editar = (elemento) => {
        setEdicion(true)
        setId(elemento.id)
        setNombre(elemento.nombre)
        setApellido(elemento.apellido)
        llenarInput(elemento)
    }


    const eliminar = id => {
        console.log(id)
        const arrayFiltrado = lista.filter((item) => item.id !== id)
        setLista(arrayFiltrado)
    }



    return (
        <div>
            <h1>Registro De Usuarios</h1>
            <form onSubmit={registrarDatos}>
                <input id='nombre' type="text"
                    placeholder='Ingrese Nombre'
                    className='form-control my-2'
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input id='apellido' type="text"
                    placeholder='Ingrese Apellido'
                    className='form-control my-2'
                    onChange={(e) => setApellido(e.target.value)}
                />
                <div className='d-grid gap-2'>
                    <button className="btn btn-primary my-2" type="submit">Agregar</button>
                </div>
            </form>
            <h1 className='text-center'>Usuarios Registrados</h1>
            <ul className='list-group'>
                {
                    lista.map((elemento, index) => (<li className='list-group-item' key={index}> {elemento.id}- {elemento.nombre} - {elemento.apellido}
                     <div>
                        <button  onClick={() => editar(elemento)} className="btn btn-warning mx-2">Editar</button>
                        <button onClick={() => eliminar(elemento.id)} className="btn btn-danger mx-2">Eliminar</button>
                     </div>
                    </li>))
                }
            </ul>
        </div>
    )
        

}

export default Formulario