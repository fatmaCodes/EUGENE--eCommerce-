import Card from "../component/Card"
import Blonde from '../assets/blondeHead.jpg'
import fashion from "../assets/fashion.webp"


function CategoryPage() {
  return (
   <>
   <div className="h-full w-full flex flex-col items-center gap-5 p-5">
      <h1 className="text-slate-100 ">
        COLOR FAMILY
      </h1>
      <div className="w-full p-2 h-[25%] flex gap-16 justify-center">
        <Card img={Blonde} text="BLONDE"/>
        <Card img={fashion} text="FASHION"/>
        <Card/>
        <Card/>
      </div>
   </div>
   </>
  )
}

export default CategoryPage  