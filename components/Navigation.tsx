"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../assets/foxLogo-dark.png'
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineClose } from "react-icons/ai"

const Navigation: React.FC = () => {
	const [toggle, setToggle] = useState(false)

	const toggleSidebar= () => setToggle(!toggle)

	const links = [
		{
			label: "Home",
			route: "/",
		},
		{
			label: "About",
			route: "/about",
		},
		{
			label: "Skills",
			route: "/skills",
		},
		{
			label: "Projects",
			route: "/projects",
		},
	]
	
  return (
		<>
		<div className={`${toggle ? "w-full h-[80%] transition duration-200" : "hidden transition duration-200"} z-50 absolute bg-transparent backdrop-blur-sm lg:hidden transition-all duration-200`}>
			<div className='flex justify-end w-full pt-2 pr-1'>
				<button className='p-2 m-2 outline-none rounded-full hover:bg-[rgb(46,46,46)] transition duration-200 text-white self-center content-center' onClick={() => toggleSidebar()}><AiOutlineClose className='w-5 h-5'/></button>
			</div>
			<ul>
				<li className="flex flex-col items-center justify-center w-full gap-10 text-white">
					<Link href="/" className='w-full px-2 py-4 mx-2 text-center hover:bg-[rgba(20,20,20, 0,5)] text-lg font-bold text-[rgb(220,220,220)]' onClick={() => toggleSidebar()}>Home</Link>
					<Link href="/about" className='w-full px-2 py-4 mx-2 text-center hover:bg-[rgba(20,20,20, 0,5)] text-lg font-bold text-[rgb(220,220,220)]' onClick={() => toggleSidebar()}>About</Link>
					<Link href="/skills" className='w-full px-2 py-4 mx-2 text-center hover:bg-[rgba(20,20,20, 0,5)] text-lg font-bold text-[rgb(220,220,220)]' onClick={() => toggleSidebar()}>Skills</Link>
					<Link href="/projects" className='w-full px-2 py-4 mx-2 text-center hover:bg-[rgba(20,20,20, 0,5)] text-lg font-bold text-[rgb(220,220,220)]' onClick={() => toggleSidebar()}>Projects</Link>
				</li>
			</ul>
		</div>
			<div className="fixed z-40 flex items-center justify-center w-full py-4 bg-transparent backdrop-blur-sm">
				<div className='flex flex-row w-full md:w-[65%] lg:w-[50%]'>
					<div className='flex flex-row items-center justify-between w-full px-4'>
						<div className='flex flex-row items-center gap-2'>
							<Image src={logo} alt="logo" className="w-10 h-10 transition duration-300 hover:rotate-12" />
							<p className='text-lg font-bold text-white'>Lionel Arce</p>
						</div>
						<button className='md:hidden' onClick={() => toggleSidebar()}>
							<RxHamburgerMenu className='text-white w-7 h-7'/>
						</button>
					</div>
						<ul className="md:flex md:flex-row w-full md:w-[60%] items-center justify-center hidden">
							{links.map(({ label, route }) => (
								<li
									key={route}
									className="mx-2 text-xs font-bold text-white transition duration-200 rounded-sm hover:text-white hover:bg-[rgb(43,43,43)]">
									<Link href={route}>
										<p className="px-4 py-2">{label}</p>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</>
  );
};

export default Navigation;