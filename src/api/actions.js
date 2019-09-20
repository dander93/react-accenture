export let aumentarContador = () => ({type : "CONTADOR_AUMENTAR"})

export let disminuirContador = () => ({type : "CONTADOR_DISMINUIR"})

export let resetearContador = () => ({type : "CONTADOR_RESETEAR"})

export let toggleVisibility = () => ({type : "FORMULARIO_TOGGLE"})

export let handleSubmit = e => {
    e.preventDefault()
    return {type : "FORMULARIO_SUBMIT"}
}

export let handleChange = e => ({
    type : "FORMULARIO_CHANGE",
    valor : e.target.value,
    id : e.target.id
})

export let userDelete = i => ({type:"LISTADO_BORRAR", i})

export let userChange = i => ({type:"LISTADO_EDITAR", i})

export let handleEdit = e => {
    e.preventDefault()
    return {type:"USUARIO_EDITAR"}
}

export let pedirUsuarios = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(res=>{
        dispatch({type:"USUARIOS_PEDIR",usuarios:res})
    })
    .catch(err=>{
        dispatch({type:"USUARIOS_ERROR"})
    })
}

