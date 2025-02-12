import { useEffect } from "react"
import { BsInstagram, BsWhatsapp } from "react-icons/bs"
import { FaFacebookMessenger } from "react-icons/fa"
import { Link } from "react-router-dom"
import projectPreviewTwo from "../src/assets/projects-img-2.png"

const ProjectTwo = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
    <section className="bg-zinc-900 text-gray-300 px-32 py-24">
        <Link to='/'><button className="px-6 text-lg font-semibold"><a href="#home">← Home</a></button></Link>
        <div className="grid lg:grid-cols-2">
            <img src={projectPreviewTwo} alt="PROJECT2" className="w-full p-6"/>
            <div className='p-6'>
                <p className="text-sm text-gray-600 mt-4">Maintenance & Repairs</p>
                <p className="text-2xl font-bold my-2">Stairs & Columns</p>
                <p className="font-semibold mb-6">May 24, 2024</p>
                <p className="text-sm mb-8">Construction of a two-story house with columns, ceiling, foundation, floor and others</p>
                <p className="text-sm mb-8">Construction of a two-story house with columns, ceiling, foundation, floor and others</p>
                <p className="text-sm mb-8">Even more description of the project and all the processes involved</p>
            </div>
        </div>
        <div className="flex justify-between">
            <Link to='/project-one'><button className="px-6 text-lg my-8 text-orange-400 flex"><a href="">← Previous Project</a></button></Link>
            <Link to='/project-three'><button className="px-6 text-lg my-8 text-orange-400 flex"><a href="">Next Project →</a></button></Link>
        </div>
        <div className="bg-zinc-900 text-white py-16">
            <div className="grid md:grid-cols-12 grid-cols-3">
                <div className="md:col-span-6 col-span-2">
                    <div>
                        <img src="../src/assets/favicon.png" alt="LOGO" />
                        <p className="font-semibold">BCon</p>
                    </div>
                    <h2 className="w-1/4 text-sm text-gray-400 py-4">We build security and trust in homes</h2>
                    <p className="text-sm text-gray-400">email: construct123@gmail.com</p>
                </div>
                <div className="md:col-span-2">
                    <p className="font-semibold pb-4">Company</p>
                    <ul className="text-sm text-gray-400">
                        <li><a href="#aboutUs">About Us</a></li>
                        <li className="py-2"><a href="#services">Services</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </div>
                <div className="col-span-2 md:pt-0 pt-8">
                    <p className="font-semibold pb-4">Information</p>
                    <p className="text-sm text-gray-400 pb-2">Garden City, Nigeria</p>
                    <p className="text-sm text-gray-400">9AM - 5PM</p>
                </div>
                <div className="md:col-span-2 md:pt-0 pt-8">
                    <p className="font-semibold pb-4">Social Media</p>
                    <div className="text-gray-400 text-sm flex gap-4">
                        <BsWhatsapp className="hover:text-orange-300 hover:shadow-md"/>
                        <FaFacebookMessenger className="hover:text-orange-300 hover:shadow-md"/>
                        <BsInstagram className="hover:text-orange-300 hover:shadow-md"/>
                    </div>
                </div>
            </div>
            <p className="text-xs text-gray-400 text-center pt-16">© All Rights Reserved By BCon</p>
        </div>
    </section>
  )
}

export default ProjectTwo
