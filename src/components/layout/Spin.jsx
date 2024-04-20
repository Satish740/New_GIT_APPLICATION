import React from 'react'
import spinner from './assets/spinner.gif'
function Spin() {
  return (
    <div className="w-100 mt-20">
        <img width={180} className='text-center mx-auto' src={spinner} alt="Loading..."/>
    </div>
  )
}
export default Spin