import React, { Component } from 'react'
import ListadoUsuarios from "./ListadoUsuarios"

class Formulario extends Component {

    render() {
        let {toggleVisibility,visible,handleSubmit,handleChange,nombre,apellido,usuarios} = this.props
        return (
            <div>
                
                {visible
                ?   <form onSubmit={handleSubmit}>
                        
                        <input type="text" id="nombre" placeholder="Nombre" onChange={handleChange} value={nombre}/>

                        <input type="text" id="apellido" placeholder="Apellido" onChange={handleChange} value={apellido}/>

                        <button>Agregar!</button>
                    </form>
                : null
                }
                
                <button onClick={toggleVisibility}>
                    {visible ? "Ocultar" : "Mostrar"}
                </button>

                <ListadoUsuarios usuarios={usuarios}/>

            </div>
        )
    }
}

export default Formulario


