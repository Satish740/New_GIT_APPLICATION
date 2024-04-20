import React from 'react'
import {useContext} from 'react'
import AlertContext from '../../context/Alert/AlertContext'
function Alert() {

  const {alert}=useContext(AlertContext)
  return (
    alert!==null && (
      <div className='grid grid-cols-1 xl:grid=cols-2 lg:grid=cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'></i>{alert.msg}
      </div>
      </div>
    )
  )
}

export default Alert
