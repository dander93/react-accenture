import React, { Component } from 'react'
import {connect} from "react-redux"
import {aumentarContador,disminuirContador,resetearContador} from "../../api/actions"
import {bindActionCreators} from "redux"

class Contador extends Component {
    render() {
        let {contador,aumentarContador,disminuirContador,resetearContador} = this.props
        return (
            <div>
                <p>Contador : {contador}</p>
                <button onClick={aumentarContador}>+</button>
                <button onClick={resetearContador}>reset</button>
                <button onClick={disminuirContador}>-</button>
            </div>
        )
    }
}

let mapDispatchToProps = dispatch => {
    return {
        aumentarContador : bindActionCreators(aumentarContador,dispatch) , 
        disminuirContador : bindActionCreators(disminuirContador,dispatch),
        resetearContador : bindActionCreators(resetearContador,dispatch)
    }
}

export default connect(
    store => ({ 
        contador : store.contador 
    }), mapDispatchToProps )(Contador)