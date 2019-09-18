let init = {
    links : ["perfil","portfolio","contacto"],
    contador : 0
}

let reducer = (prev=init,action) => {
    switch(action.type){
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