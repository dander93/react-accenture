import React , {Component} from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import Contador from "../widgets/Contador"

class App extends Component {

    constructor(){
        super()
        this.state = {
            links : ["perfil","portfolio","contacto"],
            texto : "Lorem Ipsum",
            contador : 0
        }
        this.cambiarTexto = this.cambiarTexto.bind(this)
        this.aumentarContador = this.aumentarContador.bind(this)
    }

    aumentarContador(){
        this.setState({ contador : this.state.contador + 1 })
    }
    
    cambiarTexto(){
        this.setState({ texto : "Ipsum Lorem" })
    }
    
    render(){
        let {links,contador} = this.state
        return (
            <>
            <Header links={links}/>
            <Main/>
            <Contador contador={contador} aumentarContador={this.aumentarContador} />
            <Footer/>
            </>     
        ) 
    }
}

export default App

