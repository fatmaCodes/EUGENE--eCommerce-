import React from 'react'

function ProductRow({name,categ}) {
  return (
    <div className="w-full p-3 text-2xl rounded-md bg-white shadow-2xl flex justify-between">
    <h1>
      {name}
    </h1>
    <div>
      {categ}
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
  )
}

export default ProductRow