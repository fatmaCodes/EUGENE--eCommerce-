import { useEffect } from 'react'
import changeLink from '../component/Navbar/changeLink'

function Cart() {

    useEffect(()=>{
       changeLink("#cart") 
    },[])

  return (
    <div>Cart</div>
  )
}

export default Cart