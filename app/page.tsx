"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {Mail, Sparkles, Rocket, ArrowRight, Download, Menu, X } from 'lucide-react';
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import SmallProjectCard from "@/components/SmallProjectCard";
import AnimatedButton from "@/animations/AnimatedButton";
import AnimatedDiv from "@/animations/AnimatedDiv";
import {PROJECTS, SMALLPROJECTS, SOCIALBUTTONS, TECHSTACK} from "@/api";

// @component: DeveloperPortfolio
const Page = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // @return
  return <div className="min-h-screen bg-background font-sans">
    {/* Navigation */}
    <motion.nav initial={{y: -100}} animate={{y: 0}} className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl px-6 py-4 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] bg-opacity-50 backdrop-blur-2xl">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{scale: 1.05}} className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Colombo Riccardo
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
              <AnimatedButton className="px-4 py-2 rounded-2xl primary-button-bg font-medium shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2">
                <Download size={20} /> Resume
              </AnimatedButton>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]">
              {mobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
          <motion.div initial={{opacity: 0, height: 0}} animate={{opacity: 1, height: 'auto'}} className="md:hidden mt-4 pt-4 border-t border-gray-300 flex flex-col gap-4">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            <button className="px-6 py-2 rounded-xl shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] text-left primary-button-bg flex items-center gap-2">
              <Download size={20} /> Resume
            </button>
          </motion.div>)}
        </div>
      </div>
    </motion.nav>

    {/* Hero Section */}
    <section className="pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{opacity: 0, x: -50}} animate={{opacity: 1, x: 0}} transition={{duration: 0.6}}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] mb-6">
              <Sparkles className="text-purple-600" size={20} />
              <span className="text-sm font-medium ">Available for work</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Creative Developer
                </span>
              <br />
              <span className="text-gray-800">Building Digital Experiences</span>
            </h1>

            <p className="text-xl  mb-8 leading-relaxed">
              I craft beautiful, performant web applications with modern technologies.
              Specializing in React, TypeScript, and cutting-edge UI/UX design.
            </p>

            <div className="flex flex-wrap gap-4">
              <AnimatedButton className="px-8 py-4 rounded-2xl primary-button-bg font-medium shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2">
                View Projects <ArrowRight size={20} />
              </AnimatedButton>

              <AnimatedButton className="px-8 py-4 rounded-2xl neomorphism-shadow font-medium flex items-center gap-2">
                <Download size={20} /> Resume
              </AnimatedButton>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              {SOCIALBUTTONS.map((social, idx) =>
                  <motion.a key={idx} href={social.link} whileHover={{scale: 1.1, y: -2}} whileTap={{scale: 0.9}} className="p-3 rounded-xl neomorphism-shadow transition-all">
                    <social.icon size={24} className="" />
                  </motion.a>)}
            </div>
          </motion.div>

          {/* Hero Image/3D Element */}
          <motion.div initial={{opacity: 0, x: 50}} animate={{opacity: 1, x: 0}} transition={{duration: 0.6, delay: 0.2}} className="relative">
            <div className="relative w-full h-[500px] rounded-3xl bg-[#e8e8e8] shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
                <Image src={"/foto-profilo.png"} alt={"profile pic"} width={320} height={320} className={"absolute bottom-0 right-1/2 translate-x-1/2 profile-pic"}/>
              </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Featured Projects */}
    <section id="projects">
      <div className="max-w-7xl mx-auto">
        <AnimatedDiv className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Showcasing my best work in web development, design, and innovation
          </p>
        </AnimatedDiv>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => <ProjectCard project={project} idx={idx} key={idx} setSelectedProject={setSelectedProject}/>)}
        </div>

        {/* View All Projects CTA */}
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} className="text-center mt-12">
          <AnimatedButton className="px-8 py-4 rounded-2xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] font-medium transition-all flex items-center gap-2 mx-auto">
            View All Projects <Rocket size={20} />
          </AnimatedButton>
        </motion.div>
      </div>
    </section>

    {/* Small Projects Grid */}
    <section>
      <div className="max-w-7xl mx-auto">
        <AnimatedDiv className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Mini Projects
              </span>
          </h2>
          <p className="text-xl  max-w-2xl mx-auto">
            Small experiments and fun side projects
          </p>
        </AnimatedDiv>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SMALLPROJECTS.map((project, idx) => <SmallProjectCard project={project} idx={idx} key={idx} setSelectedProject={setSelectedProject}/>)}
        </div>
      </div>
    </section>

    {/* Skills & Tech Stack */}
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedDiv className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tech Stack
              </span>
          </h2>
        </AnimatedDiv>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {TECHSTACK.map((tech, idx) =>
          <motion.div key={tech} initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{delay: idx * 0.05}}
                className="aspect-square rounded-2xl neomorphism-shadow transition-all flex items-center justify-center p-4">
                <span className="font-semibold text-center text-sm md:text-base">
                  {tech}
                </span>
          </motion.div>)}
        </div>
      </div>
    </section>

    {/* Contact CTA */}
    <section id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} className="rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-12 md:p-16 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            I'm always open to new opportunities and exciting projects.
            Let's connect and create something extraordinary together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <AnimatedButton className="px-8 py-4 rounded-2xl bg-white text-blue-600 font-medium shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2">
              <Mail size={20}/> Get In Touch
            </AnimatedButton>
            <AnimatedButton className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md text-white font-medium border-2 border-white/30 hover:bg-white/20 transition-colors flex items-center gap-2">
              <Download size={20}/> Download Resume
            </AnimatedButton>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Footer */}
    <footer>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="">© 2024 DevPortfolio. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  </div>;
};

export default Page