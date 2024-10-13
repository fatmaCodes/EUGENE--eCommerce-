import { useEffect } from "react";
import Herosec from "../component/Herosec";
import Product from "../component/Product";
import changeLink from "../component/Navbar/changeLink";
import { useSelector } from "react-redux";




function Homepage() {

  const userStatus = useSelector((state) => state.authReducer.userStatus)
  const userData = useSelector((state) => state.authReducer.userData)

  const products = [
    {
      img: "https://www.birdsofparadyes.com/cdn/shop/files/1a_14acbea7-a1e1-47e3-b994-82365b4a1394.png?v=1725526204&width=823",
      name: "Espresso Brown Glossy Hair Tint",
      price: 500
    },
    {
      img: "https://www.birdsofparadyes.com/cdn/shop/files/1a_a350b57b-31f9-4b08-8be1-57885d20a956.png?v=1725526122&width=823",
      name: "Hazel Brown Glossy Hair Tint",
      price: 450
    },
    {
      img: "https://www.birdsofparadyes.com/cdn/shop/files/1a_8d9b3d60-5671-4d2a-b771-2a0f9d034f3b.png?v=1725526247&width=823",
      name: "Ruby Rush Glossy Hair Tint",
      price: 500
    },
    {
      img: "https://www.birdsofparadyes.com/cdn/shop/files/1a_8077b16f-8bb5-4382-b3be-0c210f7f5137.png?v=1725525975&width=823",
      name: "Cherry Coke Glossy Hair Tint",
      price: 200
    }
  ]

  useEffect(() => {
    changeLink("#home")
  }, [])
  

  if (userStatus) {
    return (
      <div className="flex flex-col gap-4 justify-start items-center">
        
        <div className="my-8">
        <h1 className="text-2xl text-slate-50 ">Hey , {userData.name}</h1>
          <Herosec />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl">
            OUR PRODUCTS
          </h1>
          <div className="flex justify-around gap-4 p-3">
            {products.map((product) => {
              return <Product img={product.img} name={product.name} price={product.price} />
            })}
          </div>
        </div>

      </div>
    )
  } else {
    return (
      <div className="h-[80vh] w-full flex flex-col gap-4 justify-center items-center text-5xl text-slate-50">
        PLEASE LOGIN / SIGN UP TO CONTINUE
      </div>
    )
  }

}

export default Homepage