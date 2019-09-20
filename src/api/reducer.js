let init = {
    links : ["perfil","portfolio","contacto"],
    contador : 0,
    visible : true,
    nombre : "",
    apellido : "",
    usuarios : [],
    editar : -1 
}

let reducer = (prev=init,action) => {
    switch(action.type){
        case "USUARIOS_PEDIR":
            return {
                ...prev,
                usuarios : action.usuarios.map(u=>({
                    nombre : u.name.split(" ")[0], 
                    apellido : u.name.split(" ")[1]
                }))
            }
        case "USUARIO_EDITAR" : 
            return {...prev,editar : -1,nombre : "",apellido : "",usuarios : [...prev.usuarios.slice(0,prev.editar),{nombre:prev.nombre,apellido:prev.apellido},...prev.usuarios.slice(prev.editar+1)]}
        case "LISTADO_EDITAR" : 
            return {...prev , nombre : prev.usuarios[action.i].nombre , apellido : prev.usuarios[action.i].apellido,editar : action.i}
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