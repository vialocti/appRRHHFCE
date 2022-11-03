import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'



const PublicRoutes = () => {
    
    const isLoged = useSelector((state)=>state.login.isLoged)
    
    if(isLoged){
        return(
        <Navigate to={ '/' } />
    )}

    return (
    <div>
     <Outlet />  
    </div>
  )
}

export default PublicRoutes