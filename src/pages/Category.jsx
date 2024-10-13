import Card from "../component/Card"
import Blonde from '../assets/blondeHead.jpg'
import brownn from "../assets/brownn.png"
import reds from "../assets/reds.png"
import silver from "../assets/silver.png"
import fantasy from "../assets/fantasy.png"
import black from "../assets/black.png"
import haircare from "../assets/haircare.png"
import all from "../assets/all.png"
import port from "../assets/port.png"
import stream from "../assets/stream.png"
import articles from "../assets/articles.png"
import help from "../assets/help.png"
import gift from "../assets/gift.png"
import { useEffect } from "react"
import changeLink from "../component/Navbar/changeLink"

function CategoryPage() {
  
  
  useEffect(()=>{
    changeLink("#category")
  },[])
  
  
  return (
    <>
      <div className="h-full w-full flex flex-col items-center gap-5 p-5">
        <h1 className="text-slate-100 ">
          <b> COLOR FAMILY </b>
        </h1>
        <div className="w-full p-2 h-[25%] flex gap-16 justify-center">
          <Card img={Blonde} text="BLONDES" />
          <Card img={fantasy} text="FANTASY SHADES" />
          <Card img={brownn} text="BROWNS" />
          <Card img={reds} text="REDS & PLUMS" />
        </div>
        <div className="w-full p-2 h-[25%] flex gap-16 justify-center">
          <Card img={silver} text="GREY & SILVER" />
          <Card img={black} text="BLACK" />
          <Card img={haircare} text="MAINTENANCE" />
          <Card img={all} />
        </div>

        <div className="border-t-2 border-l-sky-100 p-3">
            <h1 className="w-full text-center text-slate-100 ">
              MORE
            </h1>
          <div className="w-full p-2 h-[25%] flex gap-16  items-center justify-center">
            <div className="w-full p-2 h-[25%] flex gap-16 justify-center">
              <Card img={port} />
              <Card img={stream} />
              <Card img={articles} />
            </div>
          </div>
          <div className="w-full p-2 h-[25%] flex gap-16 justify-center">
            <Card img={help} />
            <Card img={gift} />

          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryPage  