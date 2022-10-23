import React from 'react'

const Eventos = () => {
    const click = () => {console.log("Hiciste Click.")}
  return (
    <div>
        <h1>Eventos</h1>
        <button className="btn btn-primary m-3" onClick={() => click()} >
            Haz Click!
        </button>
    </div>
  )
}

export default Eventos