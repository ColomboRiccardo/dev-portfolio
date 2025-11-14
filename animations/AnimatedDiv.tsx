import { motion } from 'framer-motion'
import React from 'react'

const AnimatedDiv = ({children, className}: {children: React.ReactNode, className: string}) => {
    return (
        <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} className={className}>
            {children}
        </motion.div>
    )
}
export default AnimatedDiv
