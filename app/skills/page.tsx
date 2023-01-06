'use client'
import React from 'react';
import { DiReact, DiCss3 } from 'react-icons/di'
import { SiRedux, SiTypescript, SiVite, SiTailwindcss, SiBootstrap, SiChakraui, SiStyledcomponents, SiMaterialui, SiNodedotjs, SiExpress, SiSequelize, SiPrisma, SiSpringboot, SiMongodb, SiPostgresql ,SiJava } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoJavascript } from 'react-icons/io5'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaAws } from 'react-icons/fa'

const Skills: React.FC = () => {
  return (
    <div className="bg-[#202020] w-full min-h-screen h-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full h-full gap-20 px-2 py-4 text-white pt-28 lg:pt-0 lg:flex-row" id="fadeAndMove">
        <div className='flex-col'>
          <h1 className='pb-4 text-xl font-bold text-center'>FRONTEND</h1>
            <div className='grid grid-cols-4 gap-2 text-[0.7rem]'>
              <div className='flex flex-col items-center border border-[#404040] rounded-md p-2 hover:text-black hover:bg-[#dadada] transition duration-200'>
                <DiReact className='w-10 h-10'/>
                <p className='text-center'>REACT</p>
              </div>
              <div className='flex flex-col items-center border border-[#404040] rounded-md p-2 hover:text-black hover:bg-[#dadada] transition duration-200'>
                <SiRedux className='w-10 h-10'/>
                <p className='text-center'>REDUX</p>
              </div>
              <div className='flex flex-col items-center border border-[#404040] rounded-md p-2 hover:text-black hover:bg-[#dadada] transition duration-200'>
                <IoLogoJavascript className='w-10 h-10'/>
                <p className='text-center'>JAVASCRIPT</p>
              </div>
              <div className='flex flex-col items-center border border-[#404040] rounded-md p-2 hover:text-black hover:bg-[#dadada] transition duration-200'>
                <SiTypescript className='w-10 h-10'/>
                <p className='text-center'>TYPESCRIPT</p>
              </div>
              <div className='flex flex-col items-center border border-[#404040] rounded-md p-2 hover:text-black hover:bg-[#dadada] transition duration-200'>
                <SiVite className='w-10 h-10'/>
                <p className='text-center'>VITE</p>
              </div>
              <div className='flex flex-col items-center border border-[#404040] rounded-md p-2 hover:text-black hover:bg-[#dadada] transition duration-200'>
                <TbBrandNextjs className='w-10 h-10'/>
                <p className='text-center'>NEXT</p>
              </div>
              <div className='flex flex-col items-center border border-[#404040] rounded-md p-2 hover:text-black hover:bg-[#dadada] transition duration-200'>
                <SiTailwindcss className='w-10 h-10'/>
                <p className='text-center'>TAILWINDCSS</p>
              </div>
              <div className='flex flex-col items-center border border-[#404040] rounded-md p-2 hover:text-black hover:bg-[#dadada] transition duration-200'>
                <SiBootstrap className='w-10 h-10'/>
                <p className='text-center'>BOOTSTRAP</p>
              </div>
              <div className='flex flex-col items-center border border-[#404040] rounded-md p-2 hover:text-black hover:bg-[#dadada] transition duration-200'>
                <SiChakraui className='w-10 h-10'/>
                <p className='text-center'>CHAKRA UI</p>
              </div>
              <div className='flex flex-col items-center border border-[#404040] rounded-md p-2 hover:text-black hover:bg-[#dadada] transition duration-200'>
                <SiStyledcomponents className='w-10 h-10'/>
                <p className='text-center'>STYLED COMP</p>
              </div>
              <div className='flex flex-col items-center border border-[#404040] rounded-md p-2 hover:text-black hover:bg-[#dadada] transition duration-200'>
                <SiMaterialui className='w-10 h-10'/>
                <p className='text-center'>MATERIALUI</p>
              </div>
            </div>
          </div>
          <div className='flex-col'>
            <h1 className='pb-4 text-xl font-bold text-center'>BACKEND</h1>
            <div className='grid grid-cols-4 gap-2 text-[0.7rem]'>
              <div className='flex flex-col items-center border border-[#404040] rounded-md p-2 hover:text-black hover:bg-[#dadada] transition duration-200'>
                <SiNodedotjs className='w-10 h-10'/>
                <p className='text-center'>NODE</p>
              </div>
              <div className='flex flex-col items-center border border-[#404040] rounded-md p-2 hover:text-black hover:bg-[#dadada] transition duration-200'>
                <SiExpress className='w-10 h-10'/>
                <p className='text-center'>EXPRESS</p>
              </div>
              <div className='flex flex-col items-center border border-[#404040] rounded-md p-2 hover:text-black hover:bg-[#dadada] transition duration-200'>
                <SiSequelize className='w-10 h-10'/>
                <p className='text-center'>SEQUELIZE</p>
              </div>
              <div className='flex flex-col items-center border border-[#404040] rounded-md p-2 hover:text-black hover:bg-[#dadada] transition duration-200'>
                <SiPrisma className='w-10 h-10'/>
                <p className='text-center'>PRISMA</p>
              </div>
              <div className='flex flex-col items-center border border-[#404040] rounded-md p-2 hover:text-black hover:bg-[#dadada] transition duration-200'>
                <SiMongodb className='w-10 h-10'/>
                <p className='text-center'>MONGO DB</p>
              </div>
              <div className='flex flex-col items-center border border-[#404040] rounded-md p-2 hover:text-black hover:bg-[#dadada] transition duration-200'>
                <SiPostgresql className='w-10 h-10'/>
                <p className='text-center'>POSTGRE SQL</p>
              </div>
              <div className='flex flex-col items-center border border-[#404040] rounded-md p-2 hover:text-black hover:bg-[#dadada] transition duration-200'>
                <FaAws className='w-10 h-10'/>
                <p className='text-center'>AWS</p>
              </div>
              <div className='flex flex-col items-center border border-[#404040] rounded-md p-2 hover:text-black hover:bg-[#dadada] transition duration-200'>
                <SiJava className='w-10 h-10'/>
                <p className='text-center'>JAVA</p>
              </div>
              <div className='flex flex-col items-center border border-[#404040] rounded-md p-2 hover:text-black hover:bg-[#dadada] transition duration-200'>
                <SiSpringboot className='w-10 h-10'/>
                <p className='text-center'>SPRINGBOOT</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;