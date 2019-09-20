let init = {
    links : ["perfil","portfolio","contacto"],
    contador : 0,
    visible : true,
    nombre : "",
    apellido : "",
    usuarios : []
}

let reducer = (prev=init,action) => {
    switch(action.type){
        case "LISTADO_BORRAR" : 
            return { ...prev,usuarios : [...prev.usuarios.slice(0,action.i),...prev.usuarios.slice(action.i+1)]}
        case "FORMULARIO_SUBMIT" : 
            return { ...prev , usuarios : [...prev.usuarios,{nombre: prev.nombre,apellido: prev.apellido}] , nombre : "" , apellido : ""}
        case "FORMULARIO_CHANGE" : 
            return { ...prev , [action.id] : action.valor }
        case "FORMULARIO_TOGGLE" : 
            return { ...prev , visible : !prev.visible }
        case "CONTADOR_RESETEAR" : 
            return { ...prev , contador : 0 }
        case "CONTADOR_DISMINUIR" : 
            return { ...prev , contador : prev.contador - 1 }
        case "CONTADOR_AUMENTAR" : 
            return { ...prev , contador : prev.contador + 1 }
        default : 
            return prev
    }
}

export default reducer