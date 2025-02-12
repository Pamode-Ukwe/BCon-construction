import { Link } from "react-router-dom"
import projectOne from "../src/assets/projects-img-1.png"
import projectTwo from "../src/assets/projects-img-2.png"
import projectThree from "../src/assets/projects-img-3.png"

const Projects = () => {
  return (
    <section id="projects" className="bg-zinc-900 px-32 pb-16">
        <div className="font-bold text-yellow-400 text-center">OUR PROJECTS</div>
        <div className="font-bold text-4xl pt-4 text-white text-center">Latest Completed</div>
        <div className="font-bold text-4xl pb-4 text-white text-center mb-6">Projects</div>
        <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-sm">
                <Link to='/project-one'><img src={projectOne} alt="PROJECT1" className="w-full hover:cursor-pointer"/></Link>
                <div className='p-6'>
                    <p className="text-sm text-gray-600 mt-4">House construction</p>
                    <p className="text-2xl font-bold my-2">Two Story House</p>
                    <p className="font-semibold mb-6">January 15, 2024</p>
                    <p className="text-sm text-gray-600 mb-8">Construction of a two-story house with columns, ceiling, foundation, floor and others</p>
                </div>
            </div>
            <div className="bg-white rounded-sm">
                <Link to='/project-two'><img src={projectTwo} alt="PROJECT1" className="w-full"/></Link>
                <div className='p-6'>
                    <p className="text-sm text-gray-600 mt-4">Maintenance & Repairs</p>
                    <p className="text-2xl font-bold my-2">Stairs & Columns</p>
                    <p className="font-semibold mb-6">May 24, 2024</p>
                    <p className="text-sm text-gray-600 mb-8">Construction of a two-story house with columns, ceiling, foundation, floor and others</p>
                </div>
            </div>
            <div className="bg-white rounded-sm">
                <Link to='/project-three'><img src={projectThree} alt="PROJECT1" className="w-full"/></Link>
                <div className='p-6'>
                    <p className="text-sm text-gray-600 mt-4">Construction Of Home Areas</p>
                    <p className="text-2xl font-bold my-2">Kitchen Room</p>
                    <p className="font-semibold mb-6">July 03, 2024</p>
                    <p className="text-sm text-gray-600 mb-8">Construction of a two-story house with columns, ceiling, foundation, floor and others</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects
