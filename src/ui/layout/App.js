import React , {Component} from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import Contador from "../widgets/Contador"
import Formulario from "../widgets/Formulario"

class App extends Component {

    constructor(){
        super()
        this.state = {
            links : ["perfil","portfolio","contacto"],
            texto : "Lorem Ipsum",
            contador : 0,
            visible : true
        }
        this.cambiarTexto = this.cambiarTexto.bind(this)
        this.aumentarContador = this.aumentarContador.bind(this)
        this.disminuirContador = this.disminuirContador.bind(this)
        this.resetearContador = this.resetearContador.bind(this)
        this.toggleVisibility = this.toggleVisibility.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e/*nombre*/){
        e.preventDefault()

        //1) Selectores
        //let nombre = document.querySelector("input").value

        //2) Prop "ref"
        //console.log(nombre)

        //3) Referencia de Event
        let nombre = e.target[0].value
        console.dir(nombre)
        

    }

    toggleVisibility(){
        this.setState({ visible : !this.state.visible })
    }

    aumentarContador(){
        this.setState({ contador : this.state.contador + 1 })
    }

    disminuirContador(){
        this.setState({ contador : this.state.contador - 1 })
    }

    resetearContador(){
        this.setState({ contador : 0 })
    }
    
    cambiarTexto(){
        this.setState({ texto : "Ipsum Lorem" })
    }
    
    render(){
        let {links,contador,visible} = this.state
        return (
            <>
            <Header links={links}/>
            <Main/>

            <Formulario visible={visible} toggleVisibility={this.toggleVisibility} handleSubmit={this.handleSubmit}/>

            <Contador contador={contador} aumentarContador={this.aumentarContador}  disminuirContador={this.disminuirContador}  resetearContador={this.resetearContador} />
            <Footer/>
            </>     
        ) 
    }
}

export default App

