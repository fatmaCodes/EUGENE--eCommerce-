import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../component/Product'
import database from '../backend/DataBase';
import { Query } from 'appwrite';
import loading from "../assets/loading.gif"

function CustomProduct({ category }) {

  const { categ } = useParams();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  let products = []

  async function productsLoad() {
    setIsDialogOpen(true);

    products = await database.getProducts([Query.equal("product_category", category)]);

    setIsDialogOpen(false)
  }

  useEffect(() => {
    productsLoad()
  }, [])


  return (
    <>
    <dialog className={`h-screen w-screen flex justify-center items-center bg-slate-50/30 ${isDialogOpen ? "" : 'hidden'}`}>
          <div className="w-full flex flex-col justify-center items-center">
            <img src={loading} alt="" />
            <h1 className="text-slate-900 text-3xl font-bold">PLEASE WAIT </h1>
          </div>

        </dialog>
      <div className='h-full w-full flex flex-col justify-center items-center text-4xl text-slate-50'>
        <h1 className='p-6'>
          OUR {categ.toUpperCase()} PRODUCTS
        </h1>
        <div className='w-full p-4 flex flex-wrap justify-center'>
          {products.length>0?(products.map(() => {
            return <Product />
          })):(
            <h1>
              NO PRODUCTS AVAILABLE FOR THIS CATEGORY RIGHT NOW
            </h1>
          )}
        </div>
      </div>
    </>

  )
}

export default CustomProduct