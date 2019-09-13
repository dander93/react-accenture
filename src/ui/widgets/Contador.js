import React, { Component } from 'react'

class Contador extends Component {
    render() {
        let {contador,aumentarContador} = this.props
        return (
            <div>
                <p>Contador : {contador}</p>
                <button onClick={aumentarContador}>+</button>
            </div>
        )
    }
}

export default Contador