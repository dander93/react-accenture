//CommonJS 
//const React = require("react")
//ES6
import React from "react"
import ReactDOM from "react-dom"

//Mi Componente "App"
let App = () => { return "Hola Mundo" }

//Conectar un componente con el DOM
ReactDOM.render(
    <App/>,//Un componente ejecutado
    document.getElementById("root")
)