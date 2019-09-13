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
            apellido : ""
        }
        this.cambiarTexto = this.cambiarTexto.bind(this)
        this.aumentarContador = this.aumentarContador.bind(this)
        this.disminuirContador = this.disminuirContador.bind(this)
        this.resetearContador = this.resetearContador.bind(this)
        this.toggleVisibility = this.toggleVisibility.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e/*nombre*/){
        e.preventDefault()

        //1) Selectores
        //let nombre = document.querySelector("input").value

        //2) Prop "ref"
        //console.log(nombre)

        //3) Referencia de Event
        //let nombre = e.target[0].value

        //4) Controlar el cambio del input y a cada cambio de valor, guardarlo en el state de un padre. Usar este valor para retroalimentar el mismo input. 
        console.log(this.state.nombre,this.state.apellido)

        //1) Crear un state nuevo llamado usuarios y que sea un array vacio
        //2) Usar el nombre y el apellido para construir un objeto
        //3) Sin hacer push sobre this.state.usuarios, encontrar la forma para ir agregando cada nuevo usuario al array
        //4) Limpiar el string de nombre y apellido 
    }

    handleChange(e){
        //let id = e.target.id
        //let value = e.target.value
        //let campo = {}
        //campo[id] = value
        //this.setState(campo)
        //console.log(id + " : " + value)
        //console.log(id + ' : ' + value)
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
        let {links,contador,visible,nombre,apellido} = this.state
        return (
            <>
            <Header links={links}/>
            <Main/>

            <Formulario visible={visible} toggleVisibility={this.toggleVisibility} handleSubmit={this.handleSubmit} handleChange={this.handleChange} nombre={nombre} apellido={apellido}/>

            <Contador contador={contador} aumentarContador={this.aumentarContador}  disminuirContador={this.disminuirContador}  resetearContador={this.resetearContador} />
            <Footer/>
            </>     
        ) 
    }
}

export default App

