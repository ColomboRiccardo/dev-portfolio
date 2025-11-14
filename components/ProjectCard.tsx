import { motion } from 'framer-motion'
import React from 'react'
import {ExternalLink} from "lucide-react";

const ProjectCard = ({project, idx, setSelectedProject}: {project: Project, idx: number, setSelectedProject: (id: string) => void}) => {
    return (
        <motion.div key={project.id} initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{delay: idx * 0.1}} whileHover={{y: -10}} onClick={() => setSelectedProject(project.id)} className="cursor-pointer group h-full">
            <div className="rounded-3xl shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] overflow-hidden transition-shadow hover:shadow-[16px_16px_32px_#bebebe,-16px_-16px_32px_#ffffff] h-full">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <motion.div whileHover={{scale: 1.1}} className="absolute top-4 right-4 p-3 rounded-xl bg-white/20 backdrop-blur-md">
                        <ExternalLink size={20} className="text-white" />
                    </motion.div>
                </div>

                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">
                        {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => <span key={tag} className="px-3 py-1 rounded-lg shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] text-sm text-gray-700">{tag}</span>)}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default ProjectCard
