import React from 'react'
import { useContext,useEffect} from 'react'
import Spin from '../layout/Spin'
import UserItem from './UserItem'
import GithubContext from '../../context/GithubContext'
function UserResults() {
   
const{loading,users}=useContext(GithubContext)
useEffect(()=>{fetchUsers()},[])

const fetchUsers=async()=>{
    const res=await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,{

    })
    const data=await res.json()
console.log(data)
}
if(!loading){
    return (
    <div className= "grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
         {users.map((user)=>(
        <UserItem key={user.id} user={user}/>
    ))
     } 
   
    </div>
    )
}

else {
    return<Spin/>
}
}
export default UserResults
