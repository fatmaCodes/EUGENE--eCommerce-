import React, { useEffect } from 'react'
import changeLink from '../component/Navbar/changeLink'

function WishList() {

  useEffect(()=>{
    changeLink("#wishlist")
  },[])

  return (
    <div><center>This Page is Under Maintenance</center></div>
  )
}

export default WishList