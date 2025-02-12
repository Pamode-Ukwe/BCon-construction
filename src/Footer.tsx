import { BsInstagram, BsWhatsapp } from "react-icons/bs"
import { FaFacebookMessenger } from "react-icons/fa"
import logoIcon from "../src/assets/favicon.png"

const Footer = () => {
  return (
    <section className="bg-zinc-900 text-white px-32 py-16">
        <div className="grid md:grid-cols-12 grid-cols-3">
            <div className="md:col-span-6 col-span-2">
                <div>
                    <img src={logoIcon} alt="LOGO" />
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
    </section>
  )
}

export default Footer
