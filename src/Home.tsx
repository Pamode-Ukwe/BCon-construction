import { motion } from "framer-motion"

const Home = () => {
  return (
    <section id="home">
        <div className="bg-zinc-900 text-white">
            <div className="grid lg:grid-cols-3 px-32 py-10 pb-16">
                <motion.div initial={{x: '-100vw', opacity: 0}} animate={{x: 0, opacity: 1}} exit={{x: '100vw', opacity: 0}} transition={{type: 'tween', duration: 0.8}}
                    className="lg:py-6 pt:6 col-span-1">
                    <div className="font-bold text-6xl pb-4 text-center lg:text-left">Create The Constructions You Want</div>
                    <div className="py-4 text-center lg:text-left">We present the best home design, construction and maintenance service for you and your family.</div>
                    <div className="py-4 flex gap-12 lg:justify-normal justify-center">
                        <a href="#services"><button className="hover:shadow-xs font-semibold hover:shadow-orange-500 hover:bg-orange-500 hover:cursor-pointer bg-orange-500 py-2 rounded-xs px-6">Our Services</button></a>
                        <a href="#projects"><button className="font-semibold hover:text-orange-400 text-orange-500 hover:cursor-pointer">View Projects →</button></a>
                    </div>
                    <div className="lg:py-4 lg:pb-0 pb-12 flex gap-12 lg:justify-normal justify-center">
                        <div>
                            <p className="text-6xl font-bold text-yellow-300 pb-2">10+</p>
                            <p>Years of Experience</p>
                        </div>
                        <div>
                            <p className="text-6xl font-bold text-yellow-300">200+</p>
                            <p>Complete Projects</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{x: '100vw', opacity: 0}} animate={{x: 0, opacity: 1}} exit={{x: '-100vw', opacity: 0}} transition={{type: 'spring', duration: 0.6}}
                    className="col-span-2">
                    <div className="relative flex">
                        <img src="../src/assets/home-img-1.png" alt="Image1" className="px-24 lg:ml-32 lg:mt-4"/>
                        <img src="../src/assets/home-img-2.png" alt="Image2" className="absolute mt-[30%] h-[60%] ml-12 border-10 border-zinc-900"/>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Home
