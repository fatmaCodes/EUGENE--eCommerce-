import React, { useEffect } from 'react'
import changeLink from '../component/Navbar/changeLink'

function WishList() {

  useEffect(()=>{
    changeLink("#wishlist")
  },[])

  return (
    <div>This is wishlist page</div>
  )
}

export default WishList