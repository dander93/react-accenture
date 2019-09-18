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
            visible : true,
            nombre : "",
            apellido : "",
            usuarios : []
        }
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

    render(){
        let {visible,nombre,apellido,usuarios} = this.state
        return (
            <>
            
            <Header/>

            <Main/>

            <Formulario visible={visible} toggleVisibility={this.toggleVisibility} handleSubmit={this.handleSubmit} handleChange={this.handleChange} nombre={nombre} apellido={apellido} usuarios={usuarios}/>

            <Contador />
            
            <Footer/>
            </>     
        ) 
    }
}

export default App

