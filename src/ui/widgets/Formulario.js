import React, { Component } from 'react'
import ListadoUsuarios from "./ListadoUsuarios"
import {connect} from "react-redux" 
import {toggleVisibility,handleChange,handleSubmit} from "../../api/actions"
import {bindActionCreators} from "redux"

class Formulario extends Component {

    render() {
        let {toggleVisibility,visible,handleSubmit,handleChange,nombre,apellido} = this.props
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

                <ListadoUsuarios/>

            </div>
        )
    }
}

export default connect(

    ({visible,nombre,apellido}) => ({ visible,nombre,apellido }),

    dispatch => ({
        toggleVisibility : bindActionCreators(toggleVisibility,dispatch),
        handleChange : bindActionCreators(handleChange,dispatch),
        handleSubmit : bindActionCreators(handleSubmit,dispatch)
    })

)(Formulario)


