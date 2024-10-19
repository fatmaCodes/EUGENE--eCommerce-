import ProductRow from "./ProductRow"

function AddCategory() {
    return (
        <div className="flex-grow" >
            <div>
                <h1 className="text-center text-2xl p-8">
                    OUR PRODUCTS
                </h1>
            </div>
            <div className="border-2 border-black p-5 flex flex-col gap-3 overflow-scroll">
                {products.map((product, index) => {
                    return <ProductRow key={product.$id} index={index + 1} name={product.product_name} categ={product.product_category} id={product.$id} img_id={product.product_image} />
                })}

                <div className="p-3 w-full flex justify-center">
                    <button onClick={() => navigate("/admin/addproducts")} className="bg-amber-400 p-3 rounded-xl text-white">
                        ADD PRODUCT
                    </button>
                </div>

            </div>
        </div>
    )
}

export default AddCategory