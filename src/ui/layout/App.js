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
            usuarios : []
        }
    }
    
    render(){
        let {usuarios} = this.state
        return (
            <>
            <Header/>
            <Main/>
            <Formulario usuarios={usuarios}/>
            <Contador />
            <Footer/>
            </>     
        ) 
    }
}

export default App

