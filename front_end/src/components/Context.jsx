import { createContext, useReducer } from "react";
import tec_1 from '../assets/tec_1.jpg'
import tec_2 from '../assets/tec_2.jpg'
import reducer from "./Reducer";



const AppContext=createContext()
const initialState={
    title:"",
    name:'',
    image:'',
    info:''
}



const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)
    const upDateHomePage=()=>{
        return dispatch({
            type:"HOME_PAGE",
            payload:{
                title:'Home',
                name:'Technology_Casa',
                image:tec_1,
                info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            }
        })

    }
    const upDateAboutPage=()=>{
        return dispatch({
            type:"ABOUT_PAGE",
            payload:{
                title:'Who WE Are ',
                name:'About Us',
                image:tec_2,
                info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
            }
        })

    }
    // Fetch Data 
    
    return(
        <AppContext.Provider value={{...state,upDateHomePage,upDateAboutPage}}>
            {children}
        </AppContext.Provider>
    )
}
export {AppContext,AppProvider}