import React , {Component} from "react"
import { connect } from "react-redux"

class ListadoUsuarios extends Component {
    render(){
        let {usuarios} = this.props
        return(
            <ul>
            {usuarios.length 
            ? usuarios.map((usuario,i)=> 
                <li key={i}>
                    <p>{usuario.nombre} {usuario.apellido}</p>
                    <div>
                        <button>editar</button>
                        <button>borrar</button>
                    </div>
                </li> 
            ) 
            : <li>No hay usuarios</li> }
            </ul>
        )
    }
}

export default connect(store=>({
    usuarios : store.usuarios
}),null)(ListadoUsuarios)