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
            visible : true,
            nombre : "",
            apellido : "",
            usuarios : []
        }
        this.cambiarTexto = this.cambiarTexto.bind(this)
        this.aumentarContador = this.aumentarContador.bind(this)
        this.disminuirContador = this.disminuirContador.bind(this)
        this.resetearContador = this.resetearContador.bind(this)
        this.toggleVisibility = this.toggleVisibility.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({ usuarios : [...this.state.usuarios , {nombre:this.state.nombre,apellido:this.state.apellido} ] , nombre : "" , apellido : "" })
    }

    handleChange(e){
        this.setState({ [e.target.id] : e.target.value })
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
        let {links,contador,visible,nombre,apellido,usuarios} = this.state
        return (
            <>
            <Header links={links}/>
            <Main/>

            <Formulario visible={visible} toggleVisibility={this.toggleVisibility} handleSubmit={this.handleSubmit} handleChange={this.handleChange} nombre={nombre} apellido={apellido} usuarios={usuarios}/>

            <Contador contador={contador} aumentarContador={this.aumentarContador}  disminuirContador={this.disminuirContador}  resetearContador={this.resetearContador} />
            <Footer/>
            </>     
        ) 
    }
}

export default App

