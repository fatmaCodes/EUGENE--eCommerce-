import { Outlet } from "react-router"
import Navbar from "./component/Navbar/Navbar"
import Footer from "./component/Footer"
import { useDispatch } from "react-redux"
import auth from "./backend/auth"
import { login } from "./store/authSlice"
import { logout } from "./store/authSlice"
import { useEffect } from "react"

function App() {

  const dispatch = useDispatch()


  useEffect(()=>{
    auth.getCurrentUser()
    .then((userAccount)=>{
      if (userAccount) {
        dispatch(login(userAccount))
      }else{
        dispatch(logout())
      }
    })
  },[])

    return (

        <div className="min-h-screen min-w-screen bg-[#93785B] flex flex-col justify-between ">
          <header>
            <Navbar />
          </header>
          <main className="flex-grow">
            <Outlet/>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
    )

  }
  export default App
