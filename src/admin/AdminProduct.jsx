import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import conf from "../conf/conf";

function AdminProduct() {

    const userData = useSelector((state) => state.authReducer.userData);

    const navigate = useNavigate()
  
    useEffect(() => {
      if (userData.$id != conf.adminId) {
        alert("you are not admin")
        navigate("/")
      }
    }, [userData])

  return (
    <div className="flex-grow" >
    <div>
      <h1 className="text-center text-2xl p-8">
        OUR PRODUCTS
      </h1>
    </div>
    <div className="border-2 border-black p-5 flex flex-col gap-3">
      <div className="w-full p-3 text-2xl rounded-md bg-white shadow-2xl flex justify-between">
        <h1>
          Product1
        </h1>
        <div>
          category
        </div>
        <div className="flex gap-2">
          <button className="bg-lime-800 text-lg p-2 text-white rounded-lg">
            EDIT
          </button>
          <button className="bg-red-600 text-lg p-2 text-white rounded-lg">
            DEL
          </button>
        </div>
      </div>

      <div className="p-3 w-full flex justify-center">
          <button onClick={()=>navigate("/admin/addproducts")} className="bg-amber-400 p-3 rounded-xl text-white">
          ADD PRODUCT  
          </button>              
      </div>                

    </div>
  </div>
  )
}

export default AdminProduct