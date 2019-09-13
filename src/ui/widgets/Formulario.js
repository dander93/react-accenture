import React, { Component } from 'react'

class Formulario extends Component {

    render() {
        let {toggleVisibility,visible,handleSubmit} = this.props
        return (
            <div>
                
                {visible
                ?   <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Nombre" ref="nombre"/>
                        <button>Agregar!</button>
                    </form>
                : null
                }
                
                <button onClick={toggleVisibility}>
                    {visible ? "Ocultar" : "Mostrar"}
                </button>
            </div>
        )
    }
}

export default Formulario


/* 
<form onSubmit={e=>{
    e.preventDefault()
    handleSubmit(this.refs.nombre.value)
}}> 
*/