import {useState,useContext} from 'react'
import GithubContext from '../../context/GithubContext'
import AlertContext from '../../context/Alert/AlertContext'
import {searchUsers} from '../../context/GithubActions'
// grid is  grid-cols-1 for 1 column, grid-cols-2 for 2 columns, grid-cols-3 for 3 columns, and grid-cols-4 for 4 columns
// grid is  xl for extra large screens, lg for large screens, md for medium screens, and mb-8 for margin bottom 8
function UserSearch() {

    const [text,setText]=useState('')
    const {users,dispatch}=useContext(GithubContext)

    const {setAlert}=useContext(AlertContext)
    const handleChange=(e)=>{
        setText(e.target.value)
    }

    const handleSubmit= async (e)=>{
        e.preventDefault()
        if(text===''){
            setAlert('Please enter something','error')
        }else{
            dispatch({type:'SET_LOADING'})
            const u=await searchUsers(text)
            dispatch({type:'GET_USERS',payload:u})
            setText('')
        }
    }
  return (
    <div className='grid grid-cols-1 xl:grid=cols-2 lg:grid=cols-2 md:grid-cols-2 mb-8 gap-8'> 
      <div>
        <form onSubmit={handleSubmit}>
            <div className='form-control'>
                <div className='relative'>
                    <input type='text' placeholder='Search Users...' className='w-full pr-40  bg-gray-200 input input-lg text-black' value={text}  onChange={handleChange} />
                    <button type='submit' className='absolute top-0 right-0 w-36 btn btn-lg rounded-l-none'>Search</button>
                </div>
            </div>
        </form>
      </div>

      {users.length>0 && (
        <div>
          <button className='btn btn-ghost btn-lg' onClick={()=>dispatch({type:'CLEAR_USERS'})}>Clear</button>
      </div>
           )} 

      


    </div>
  )
}

export default UserSearch


