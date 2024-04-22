


const reducer=(state,action)=>{
    if(action.type==='HOME_PAGE'){
        return{
            ...state,
            title:action.payload.title,
            name:action.payload.name,
            image:action.payload.image,
            info:action.payload.info,

        }
    }
    if(action.type==='ABOUT_PAGE'){
        return{
            ...state,
            title:action.payload.title,
            name:action.payload.name,
            image:action.payload.image,
            info:action.payload.info,

        }
    }
    return state
}
export default reducer