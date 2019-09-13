import React, { Component } from 'react'

class Formulario extends Component {

    render() {
        let {toggleVisibility,visible,handleSubmit,handleChange,nombre,apellido} = this.props
        return (
            <div>
                
                {visible
                ?   <form onSubmit={handleSubmit}>
                        
                        <input type="text" id="nombre" placeholder="Nombre" /* ref="nombre" */ onChange={handleChange} value={nombre}/>

                        <input type="text" id="apellido" placeholder="Apellido" onChange={handleChange} value={apellido}/>

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