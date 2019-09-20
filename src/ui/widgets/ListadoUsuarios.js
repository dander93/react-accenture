import React , {Component} from "react"
import { connect } from "react-redux"

class ListadoUsuarios extends Component {
    render(){
        let {usuarios} = this.props
        return(
            <ul>
            {usuarios.length 
            ? usuarios.map((usuario,i)=> 
                <li key={i}>{usuario.nombre} {usuario.apellido}</li> 
            ) 
            : <li>No hay usuarios</li> }
            </ul>
        )
    }
}

export default connect(store=>({
    usuarios : store.usuarios
}),null)(ListadoUsuarios)