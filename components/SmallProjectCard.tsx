import { motion } from 'framer-motion'
import React from 'react'
import {ArrowRight} from "lucide-react";

const SmallProjectCard = ({project, idx, setSelectedProject}: {project: SmallProject, idx: number, setSelectedProject: (id: string) => void}) => {
    return (
        <motion.div key={project.id} initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{delay: idx * 0.05}} whileHover={{scale: 1.05, y: -5}} className="cursor-pointer h-full">
            <div className="rounded-2xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] transition-shadow p-6 h-full flex flex-col">
                {project.embedUrl ? (
                    <div className="w-full h-32 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 mb-4 flex items-center justify-center text-4xl overflow-hidden shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]">
                        <iframe src={project.embedUrl} className="w-full h-full border-0" title={project.title} />
                    </div>) : (
                    <div className="w-full h-32 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 mb-4 flex items-center justify-center text-5xl shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]">
                        {project.icon}
                    </div>)
                }
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                    {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                    {project.description}
                </p>
                <motion.a href={project.link} whileHover={{x: 5}} className="text-blue-600 font-medium text-sm flex items-center gap-1">
                    View Project <ArrowRight size={16} />
                </motion.a>
            </div>
        </motion.div>)
}
export default SmallProjectCard
