import ProductRow from "./ProductRow"

function AddCategory() {
    return (
        <div className="flex-grow" >
            <div>
                <h1 className="text-center text-2xl p-8">
                    OUR CATEGORY
                </h1>
            </div>
            <div className="border-2 border-black p-5 flex flex-col gap-3 overflow-scroll">
                
                <div className="p-3 w-full flex justify-center">
                    <button onClick={() => navigate("/admin/addproducts")} className="bg-amber-400 p-3 rounded-xl text-white">
                        ADD CATEGORY
                    </button>
                </div>

            </div>
        </div>
    )
}

export default AddCategory