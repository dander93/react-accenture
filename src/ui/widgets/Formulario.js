import React, { Component } from 'react'
import ListadoUsuarios from "./ListadoUsuarios"
import {connect} from "react-redux" 
import {toggleVisibility,handleChange,handleSubmit,handleEdit} from "../../api/actions"
import {bindActionCreators} from "redux"

class Formulario extends Component {

    render() {
        let {toggleVisibility,visible,handleSubmit,handleChange,nombre,apellido,editar,handleEdit} = this.props
        return (
            <div>
                
                {visible
                ?   <form onSubmit={editar > -1 ?handleEdit:handleSubmit}>
                        
                        <input type="text" id="nombre" placeholder="Nombre" onChange={handleChange} value={nombre}/>

                        <input type="text" id="apellido" placeholder="Apellido" onChange={handleChange} value={apellido}/>

                        <button>{editar > -1 ?"Editar":"Agregar"}</button>
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

    ({visible,nombre,apellido,editar}) => ({ visible,nombre,apellido,editar }),

    dispatch => ({
        toggleVisibility : bindActionCreators(toggleVisibility,dispatch),
        handleChange : bindActionCreators(handleChange,dispatch),
        handleSubmit : bindActionCreators(handleSubmit,dispatch),
        handleEdit : bindActionCreators(handleEdit,dispatch)
    })

)(Formulario)


