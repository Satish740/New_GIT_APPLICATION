import { createContext ,useReducer} from "react"
import githubReducer from "./GithubReducer"

const GithubContext = createContext()



export const GithubProvider=({children})=>{
    const initialState={
        users:[],
        user:{},
        repos:[],
        loading:false
    }

    const [state,dispatch]=useReducer(githubReducer,initialState)
  /*  const [users,setUsers]=useState([])
    const [loading,setLoading]=useState(true)*/



    return (
        <GithubContext.Provider 
        value={{
            ...state,
            dispatch
        }}>
            {children}
        </GithubContext.Provider>
    )

}

export default GithubContext