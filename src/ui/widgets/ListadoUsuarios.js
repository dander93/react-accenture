import React , {Component} from "react"
import { connect } from "react-redux"
import {userDelete , userChange} from "../../api/actions"
import { bindActionCreators } from "redux"

class ListadoUsuarios extends Component {
    render(){
        let {usuarios,userDelete,userChange} = this.props
        return(
            <ul>
            {usuarios.length 
            ? usuarios.map((usuario,i)=> 
                <li key={i}>
                    <p>{usuario.nombre} {usuario.apellido}</p>
                    <div>
                        <button onClick={userChange.bind(null,i)}>editar</button>
                        <button onClick={userDelete.bind(null,i)}>borrar</button>
                    </div>
                </li> 
            ) 
            : <li>No hay usuarios</li> }
            </ul>
        )
    }
}

export default connect(
    store=>({
        usuarios : store.usuarios
    }),
    dispatch=>({
        userDelete : bindActionCreators(userDelete,dispatch),
        userChange : bindActionCreators(userChange,dispatch)
    }))(ListadoUsuarios)