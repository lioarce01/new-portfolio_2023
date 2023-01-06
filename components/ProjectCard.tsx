'use client'
import Image from 'next/image';
import ListBox from '../components/ListBox'
import { AiFillGithub,AiOutlineLink } from 'react-icons/ai'

interface ProjectProps {
  id: number
  name: string
  description: string
  technologies: string[]
  stack: string
  github: string
  deploy: string
  image: string
}

const ProjectCard = ({name, description, technologies, stack, github, deploy, image}: ProjectProps) => {

  return (
    <div className="bg-[#313131] shadow-black shadow-lg hover:shadow-xl transition duration-200 hover:shadow-black rounded-md text-[rgb(240,240,240)] w-full h-full p-4">
      <div className='flex flex-col justify-between h-full gap-4'>
        <div className='flex flex-row justify-center'>
          <h1 className="text-lg font-bold text-center">
            {name} 
          </h1>
          <div className='flex items-start justify-end'>
            <span className={`text-xs uppercase font-bold m-2 ${stack === 'Fullstack' ? 'text-red-500' : 'text-yellow-300'}`}>{stack}</span>
          </div>
        </div>
          <Image src={image} alt="/" width={500} height={500} className="object-cover w-full h-full rounded-md" />
          <p className='h-full font-thin text-center text-md'>{description}</p>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row gap-4'>
            <a target="_blank" rel="noopener noreferrer" href={github} className="p-2 transition duration-300 rounded-full hover:bg-white hover:text-black"><AiFillGithub className='w-8 h-8'/></a>
            <a target="_blank" rel="noopener noreferrer" href={deploy} className="p-2 transition duration-300 rounded-full hover:bg-white hover:text-black"><AiOutlineLink className='w-8 h-8'/></a>
          </div>
          <div>
            <ListBox technologies={technologies}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;