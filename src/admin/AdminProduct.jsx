import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import conf from "../conf/conf";
import ProductRow from "./ProductRow";
import database from "../backend/DataBase";

function AdminProduct() {

    const userData = useSelector((state) => state.authReducer.userData);

    const [products,setProducts] = useState([])

    const navigate = useNavigate()

    async function loadProducts() {
      const _products = await database.getProducts();

      setProducts(_products.documents)
    }
  
    useEffect(async () => {
      if (userData.$id != conf.adminId) {
        alert("you are not admin")
        navigate("/")
      }

      loadProducts()


    }, [userData])

  return (
    <div className="flex-grow" >
    <div>
      <h1 className="text-center text-2xl p-8">
        OUR PRODUCTS
      </h1>
    </div>
    <div className="border-2 border-black p-5 flex flex-col gap-3">
      {products.map((product)=>{
          return <ProductRow name={product.product_name} categ={product.product_category}/>
      })}

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