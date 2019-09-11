import React , {Component} from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"

class App extends Component {

    constructor(){
        super()
        this.state = {
            links : ["perfil","portfolio","contacto"],
            texto : "Lorem Ipsum"
        }
        this.cambiarTexto = this.cambiarTexto.bind(this)
    }

    cambiarTexto(){
        this.setState({ texto : "Ipsum Lorem" })
    }
    
    render(){
        let {links,texto} = this.state
        return (
            <>
            <Header links={links}/>
            <p>{texto}</p>
            <button onClick={this.cambiarTexto}>click!</button>
            <Main/>
            <Footer/>
            </>     
        ) 
    }
}

export default App

