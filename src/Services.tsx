import { useState } from "react"
import { BiBuildingHouse, BiDroplet } from "react-icons/bi"
import { BsHouse } from "react-icons/bs"
import { MdConstruction } from "react-icons/md"
import { RiInstallLine } from "react-icons/ri"

const Services = () => {
    const data = [
        {image: BiDroplet, title: 'Water & Drainage Installation1', text: 'We build with the best professionals and high quality work for a safe and healthy home'}, 
        {image: BsHouse, title: 'Housing Construction', text: 'We build with the best professionals and high quality work for a safe and healthy home'}, 
        {image: BiBuildingHouse, title: 'Construction Of Home Areas', text: 'We build with the best professionals and high quality work for a safe and healthy home'}, 
        {image: MdConstruction, title: 'Maintenance And Repair', text: 'We build with the best professionals and high quality work for a safe and healthy home'}, 
        {image: RiInstallLine, title: 'Installation Of Ceramics And Others', text: 'We build with the best professionals and high quality work for a safe and healthy home'}
    ]
    const [move, setMove] = useState(0)
    const prevSlide = () => {setMove((prev) => (prev > 0 ? prev - 1 : 0))}
    const nextSlide = () => {setMove((prev) => (prev < data.length - 3 ? prev + 1 : data.length - 3))}
  return (
    <section id="services" className="px-32 pb-32 bg-gradient-to-b from-white to-zinc-900 md:from-50%">
        <h1 className="font-bold text-yellow-400 lg:text-left text-center w-fit">OUR SERVICES</h1>
        <div className="grid md:grid-cols-12 items-center md:gap-12 gap-6">
            <div className="font-bold text-4xl py-4 col-span-5">High Quality Construction Services</div>
            <div className="text-gray-600 col-span-4 text-sm">We provide multiple services for you, offering confidence and security in construction</div>
            <div className="w-full col-span-3 flex justify-end">
                <button className="hover:shadow-xs font-semibold hover:shadow-orange-500 hover:bg-orange-500 hover:cursor-pointer bg-orange-500 py-2 text-white rounded-xs px-6">Contact Now</button>
            </div>
        </div>
        <div className="grid lg:grid-cols-3 py-12 gap-12">
        {data.slice(move, move + 3).map((d) => {
            const Icon = d.image 
            return (
            <div className="px-12 border border-orange-200 pt-12 pb-20 shadow-md bg-white rounded-sm">
                    <Icon className="text-white bg-black rounded-full text-4xl"/>
                    <h1 className="font-semibold text-2xl py-6">{d.title}</h1>
                    <p className="text-gray-600 text-sm">{d.text}</p>
        </div> )})} 
        </div>
        <div className="flex justify-center gap-8">
            <button onClick={prevSlide} className="text-white hover:cursor-pointer hover:text-yellow-300">◁</button>
            <button onClick={nextSlide} className="text-white hover:cursor-pointer hover:text-yellow-300">▷</button>
        </div>        
    </section>
  )
}

export default Services
