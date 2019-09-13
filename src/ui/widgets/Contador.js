import React, { Component } from 'react'

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

export default Contador