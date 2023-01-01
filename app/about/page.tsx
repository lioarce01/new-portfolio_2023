import React from 'react';
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai"


const About: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-screen bg-black">
			<div className="z-10 flex flex-col justify-center w-full text-white top-28 md:w-[50vw] lg:w-[40vw] px-6">
				<div className="flex flex-col items-center text-[rgb(230,230,230)] content-center self-center justify-center p-2 text-2xl font-bold text-center bg-transparent rounded-md backdrop-blur-sm">
					I&apos;m a Software Developer based in Argentina
				</div>
				<div className="mt-28">
					<p className="w-auto text-2xl font-bold text-[rgb(230,230,230)]">Lionel Arce</p>
					<small className="font-thin text-lg text-[rgb(230,230,230)]">Software Developer</small>
				</div>
				<div className="pt-8 md:px-0">
					<strong className="my-4 text-lg border-b border-b-white text-[rgb(230,230,230)]">Work</strong>
					<p className="pt-4 text-justify text-[rgb(230,230,230)]">Hi! My name is Lionel and I am a student of computer engineering and a fullstack software developer. Recently, I completed a fullstack web development bootcamp where I learned a wide range of technologies, including React, Next.js, TypeScript, Node.js, Express, and PostgreSQL. Currently, I am also learning Java and Spring Boot for backend services and AWS for cloud computing.</p>
					<p className="pt-4 text-justify text-[rgb(230,230,230)]">In addition to my technical skills, I am also a strong problem solver and have excellent communication and collaboration skills. As a software developer, I am always looking to learn and improve my skills, and I am excited to bring my passion and expertise to any project I work on.</p>
				</div>
				<div className='flex items-center justify-center w-full gap-6'>
					<a target="_blank" rel="noopener noreferrer" href="https://github.com/lioarce01" className='my-16 py-2 px-4 rounded-md text-[rgb(230,230,230)] hover:bg-white hover:text-black transition duration-200 w-fit text-lg border border-white flex flex-row items-center gap-1 justify-center'><AiFillGithub/> <span>Github</span></a>
					<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lionel-arce/" className='my-16 py-2 px-4 rounded-md text-[rgb(230,230,230)] hover:bg-white hover:text-black transition duration-200 w-fit text-lg border border-white flex flex-row items-center gap-1 justify-center'><AiFillLinkedin/> <span>Linkedin</span></a>
					<a target="_blank" rel="noopener noreferrer" href="mailto:lioarce1@gmail.com" className='my-16 py-2 px-4 rounded-md text-[rgb(230,230,230)] hover:bg-white hover:text-black transition duration-200 w-fit text-lg border border-white flex flex-row items-center gap-1 justify-center'><AiOutlineMail/> <span>Email me</span></a>
				</div>
			</div>
		</div>
  );
};

export default About;