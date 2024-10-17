import React from 'react'
import { useSelector } from 'react-redux'

function AuthLayout({children}) {
  
    const userStatus = useSelector((state)=>state.authReducer.userStatus)

    console.log(userStatus);
    

    return (
    <>
    {userStatus?children:(
        <div>
            PLEASE LOGIN
        </div>
    )}
    </>
  )
}

export default AuthLayout