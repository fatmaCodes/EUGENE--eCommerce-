import { useEffect } from 'react'
import changeLink from '../component/Navbar/changeLink'

function Cart() {

    useEffect(()=>{
       changeLink("#cart") 
    },[])

  return (
    <div><center>This Page is Under Maintenance</center></div>
  )
}

export default Cart