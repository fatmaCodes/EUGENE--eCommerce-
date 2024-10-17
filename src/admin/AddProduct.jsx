import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import conf from "../conf/conf";

function AddProduct() {

    const userData = useSelector((state) => state.authReducer.userData);

    const navigate = useNavigate()
  
    useEffect(() => {
      if (userData.$id != conf.adminId) {
        alert("you are not admin")
        navigate("/")
      }
    }, [userData])

  return (
    <div className="flex-grow">
        <h1 className="p-4 text-xl ">
            Add Products
        </h1>
        <form>
            <div className="p-2 flex gap-2 it items-center">
                <label htmlFor="name">PRODUCT NAME:</label>
                <input type="text"  name="name" className="p-2 rounded-md" placeholder="enter product name"/>
            </div>
            <div className="p-2 flex gap-2 items-center">
                <label htmlFor="price">PRODUCT PRICE:</label>
                <input type="number" name="price" className="p-2 rounded-md" placeholder="enter product price"/>
            </div>
            <div className="p-2 flex gap-2 items-center">
                <label htmlFor="img">PRODUCT image:</label>
                <input type="file" name="img" className="p-2 rounded-md"/>
            </div>
            <div className="p-2 flex gap-2 items-center">
                <label htmlFor="desc">PRODUCT DESC:</label>
                <input type="text" name="desc" className="p-2 rounded-md" placeholder="enter product desc"/>
            </div>
            <div className="p-2 flex gap-2 items-center">
                <label htmlFor="categ">PRODUCT DESC:</label>
                <select name="categ" id="" className="p-3">
                    <option value="blonde">
                        BLONDES
                    </option>
                    <option value="fantasy">
                        FANTASY
                    </option>
                    <option value="brown">
                        BROWN
                    </option>
                    <option value="red">
                        REDS
                    </option>
                    <option value="silver">
                        SILVER
                    </option>
                    <option value="black">
                        BLACK
                    </option>
                    <option value="haircare">
                        HAIRCARE
                    </option>
                </select>
            </div>
            <div className="p-4">
             <input type="submit" value="ADD" className="p-2 bg-orange-900 text-white rounded-lg"/>
            </div>
        </form>
    </div>
  )
}

export default AddProduct