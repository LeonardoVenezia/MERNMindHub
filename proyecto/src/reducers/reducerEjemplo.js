const stateInicial = {
    algo:""
}

const reducerEjemplo = (state=stateInicial, action)=>{
    console.log(action);
    

    switch (action.type){
        case 'CAMBIAR_ALGO':
            return {
                ...state,
                algo:action.payload
            }
    }

}

export default reducerEjemplo;