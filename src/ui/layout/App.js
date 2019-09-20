import React , {Component} from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import Contador from "../widgets/Contador"
import Formulario from "../widgets/Formulario"

class App extends Component {
    render(){
        return (
            <>
            <Header/>
            <Main/>
            <Formulario/>
            <Contador />
            <Footer/>
            </>     
        ) 
    }
}

export default App

