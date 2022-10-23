import React from 'react'

const Variables = () => {
    const texto1 = 'Buenas Tardes'
    let texto2 = 'Como Estas?'
    const url = 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Logo_uni-costa.png'
    return (
        <div>
            <h2>Variables En jsx, {texto1}, {texto2}</h2>
            <img src={url} alt="" />
        </div>
    )
}

export default Variables