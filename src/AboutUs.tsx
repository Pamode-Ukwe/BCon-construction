import aboutOne from "../src/assets/about-img-1.png"
import aboutTwo from "../src/assets/about-img-2.png"

const AboutUs = () => {
  return (
    <section id="aboutUs" className="grid lg:grid-cols-2 md:px-32 sm:px16 px-8 md:py-16 md:gap-12">
         <div className="lg:relative order-2 lg:order-1 p-2">
                <img src={aboutOne} alt="About image1" className="lg:absolute lg:border-10 lg:border-white mx-auto lg:h-[65%] lg:right-0"/>
                <img src={aboutTwo} alt="About image2" className="lg:mt-[30%] lg:h-[60%] lg:ml-12 hidden lg:grid"/>
        </div>
        <div className="my-auto order-1 lg:order-2">
            <div className="flex w-full justify-center lg:justify-normal py-4">
                <h1 className="font-bold text-yellow-400 lg:text-left text-center w-fit">ABOUT US</h1>
            </div>
            <h1 className="font-bold text-4xl py-4 lg:w-4/5 lg:text-left text-center ">We Provide The Best Service To Build</h1>
            <h1 className="text-gray-600 lg:w-3/4 pt-2 lg:text-left text-center ">We strive to provide the best professionals to make your project a construction masterpiece, something unique and unmatched</h1>
            <div className="grid grid-cols-2 w-full sm:ml-[10%] md:ml-[12.5%] lg:ml-0  text-gray-600 pt-6">
                <p><span className="font-bold text-orange-500">↦ </span>Professional workers</p>
                <p><span className="font-bold text-orange-500">↦ </span>Guaranteed quality</p>
            </div>
            <div className="grid grid-cols-2 w-full sm:ml-[10%] md:ml-[12.5%] lg:ml-0 pb-10 text-gray-600">
                <p><span className="font-bold text-orange-500">↦ </span>Extensive experience</p>
                <p><span className="font-bold text-orange-500">↦ </span>We quote your project</p>
            </div>
            <div className="flex w-full justify-center lg:justify-normal">
                <button className="hover:shadow-xs flex justify-center md:justify-normal font-semibold hover:shadow-orange-500 hover:bg-orange-500 hover:cursor-pointer bg-orange-500 py-2 text-white rounded-xs px-6"><a href="#projects">View Projects</a></button>
            </div>
        </div>
    </section>
  )
}

export default AboutUs
