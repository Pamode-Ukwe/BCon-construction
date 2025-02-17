import { BiMessage } from "react-icons/bi"
import contactPic from "../src/assets/contact-img.png"
import { BsTelephone, BsWhatsapp } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"
import { FaFacebookMessenger, FaInstagram } from "react-icons/fa"

const ContactUs = () => {
  return (
    <section id="contact-us" className="md:px-32 sm:px16 px-12 py-16">
        <h1 className="font-bold text-yellow-400 lg:text-left text-center">CONTACT US</h1>
        <div className="font-bold text-4xl py-4">Write To Us & Build</div>
        <div className="grid lg:grid-cols-2 gap-16 py-4">
            <img src={contactPic} alt="" />
            <div className="grid lg:grid-cols-2 gap-12 sm:mx-0 mx-auto">
                <div className="">
                    <div className="px-12 bg-white rounded-sm">
                        <CiLocationOn className="text-white bg-black rounded-full text-4xl"/>
                        <h1 className="font-semibold text-2xl py-6">We are here</h1>
                        <p className="text-gray-600 text-sm">Nigeria, Afrcia</p>
                        <p className="text-gray-600 text-sm">Graden City</p>
                    </div>
                </div>
                <div className="">
                    <div className="px-12 bg-white rounded-sm">
                        <BsTelephone className="text-white bg-black rounded-full text-4xl"/>
                        <h1 className="font-semibold text-2xl py-6">Talk to us</h1>
                        <p className="text-gray-600 text-sm">+23412312312345</p>
                    </div>
                </div>
                <div>
                    <div className="px-12 bg-white rounded-sm">
                        <BiMessage className="text-white bg-black rounded-full text-4xl"/>
                        <h1 className="font-semibold text-2xl py-6">Have a chat</h1>
                        <div className="text-gray-600 text-sm flex gap-6">
                            <BsWhatsapp className="cursor-pointer hover:text-orange-300"/>
                            <FaFacebookMessenger className="cursor-pointer hover:text-orange-300"/>
                            <FaInstagram className="cursor-pointer hover:text-orange-300"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs
