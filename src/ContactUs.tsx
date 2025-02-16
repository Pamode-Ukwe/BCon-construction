import { BiLocationPlus, BiMessage } from "react-icons/bi"
import { BsInstagram, BsTelephone, BsWhatsapp } from "react-icons/bs"
import { FaFacebookMessenger } from "react-icons/fa"
import contactPic from "../src/assets/contact-img.png"

const ContactUs = () => {
  return (
    <section id="contact-us" className="md:px-32 sm:px16 px-8 py-16">
        <h1 className="font-bold text-yellow-400 lg:text-left text-center w-fit">CONTACT US</h1>
        <div className="font-bold text-4xl py-4 col-span-5">Write To Us & Build</div>
        <div className="grid lg:grid-cols-2 gap-16 py-4">
            <img src={contactPic} alt="" />
            <div className="grid lg:grid-cols-2 text-center gap-6">
                <div className="grid border border-gray-200 shadow-lg hover:border-orange-300 hover:cursor-pointer hover:shadow-lg">
                    <BiLocationPlus className="text-3xl mx-auto grid mt-6"/>
                    <h1 className="text-2xl font-semibold">We are here ↓</h1>
                    <h1 className="text-gray-600 text-sm">Nigeria, Africa</h1>
                    <h2 className="text-gray-600 text-sm lg:pb-0 pb-8">BCon, Garden City</h2>
                </div>
                <div className="grid border border-gray-200 shadow-lg hover:border-orange-300 hover:cursor-pointer hover:shadow-lg">
                    <BsTelephone className="text-3xl mx-auto grid mt-6"/>
                    <h1 className="text-2xl font-semibold">Talk To Us</h1>
                    <h1 className="text-gray-600 text-sm lg:pb-0 pb-8">+234 802 888 4444</h1>
                </div>
                <div className="grid border border-gray-200 shadow-lg hover:border-orange-300 hover:cursor-pointer hover:shadow-lg">
                    <BiMessage className="text-3xl mx-auto grid mt-6"/>
                    <h1 className="text-2xl font-semibold">Chat With Us</h1>
                    <div className="text-gray-600 text-sm flex justify-between lg:px-18 px-44 lg:pt-0 pt-2  lg:pb-0 pb-8">
                        <BsWhatsapp className="hover:text-orange-300 hover:shadow-md"/>
                        <FaFacebookMessenger className="hover:text-orange-300 hover:shadow-md"/>
                        <BsInstagram className="hover:text-orange-300 hover:shadow-md"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs
