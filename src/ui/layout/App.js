import React , {Component} from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"

class App extends Component {

    constructor(){
        super()
        this.state = {
            links : ["perfil","portfolio","contacto"]
        }
    }
    
    render(){
        let {links} = this.state
        return (
            <>
            <Header links={links}/>
            <Main/>
            <Footer/>
            </>     
        ) 
    }
}

export default App

