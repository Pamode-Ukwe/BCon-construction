import { useState } from "react"

const Navbar = () => {
    const [menu, setMenu] = useState(false)
  return (
    <nav className="sticky top-0 w-full z-50">
        <div className="relative flex justify-between bg-zinc-900 text-white py-8 px-16 ">
            <div className="flex lg:gap-2 gap-0.5 items-center">
                <img src="../src/assets/favicon.png" alt="LOGO" />
                <p className="font-semibold mr-1 text-orange-500">BCon</p>
            </div>
            <div>
                <ul className="md:flex justify-between gap-16 items-center hidden">
                    <li className="hover:text-orange-300 hover:cursor-pointer ml-1"><a href="#home">Home</a></li>
                    <li className="hover:text-orange-300 hover:cursor-pointer"><a href="#aboutUs">About Us</a></li>
                    <li className="hover:text-orange-300 hover:cursor-pointer"><a href="#services">Services</a></li>
                    <li className="hover:text-orange-300 hover:cursor-pointer"><a href="#projects">Projects</a></li>
                    <button className="hover:shadow-xs font-semibold hover:shadow-orange-500 hover:bg-orange-500 hover:cursor-pointer bg-orange-500 py-2 rounded-xs px-6"><a href="#contact-us">Contact Us</a></button>
                </ul>
                <div>
                    <p className="font-bold text-2xl hover:cursor-pointer md:hidden flex" onClick={() => setMenu(m => !m)}>=</p>
                    { menu && <ul className="absolute md:hidden py-12 bg-zinc-900 text-white right-0 top-full w-4/5 ">
                        <li className="hover:text-orange-300 hover:cursor-pointer p-4 text-center"><a href="#home">Home</a></li>
                        <li className="hover:text-orange-300 hover:cursor-pointer p-4 text-center"><a href="#aboutUs">About Us</a></li>
                        <li className="hover:text-orange-300 hover:cursor-pointer p-4 text-center"><a href="#services">Services</a></li>
                        <li className="hover:text-orange-300 hover:cursor-pointer p-4 text-center"><a href="#projects">Projects</a></li>
                        <div className="p-4 text-center">
                            <button className="hover:shadow-xs font-semibold hover:shadow-orange-500 hover:bg-orange-500 hover:cursor-pointer bg-orange-500 py-2 rounded-xs px-6"><a href="#contact-us">Contact Us</a></button>
                        </div>
                    </ul> }
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
