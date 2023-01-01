import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../assets/foxLogo-dark.png'
import {RxHamburgerMenu} from "react-icons/rx"

const Navigation: React.FC = () => {

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
    <div className="fixed z-50 flex items-center justify-center w-full py-4 bg-black">
			<div className='flex flex-row w-full md:w-[65%] lg:w-[50%]'>
				<div className='flex flex-row items-center justify-between w-full px-4'>
					<div className='flex flex-row items-center gap-2'>
						<Image src={logo} alt="logo" className="w-10 h-10 transition duration-300 hover:rotate-12" />
						<p className='text-lg font-bold text-white'>Lionel Arce</p>
					</div>
					<button className='md:hidden'>
						<RxHamburgerMenu className='text-white w-7 h-7'/>
					</button>
				</div>
					<ul className="md:flex md:flex-row w-full md:w-[60%] items-center justify-center hidden">
						{links.map(({ label, route }) => (
							<li
								key={route}
								className="mx-2 text-xs font-bold text-white transition duration-200 rounded-sm hover:text-white hover:bg-[rgb(87,87,87)]">
								<Link href={route}>
									<p className="px-4 py-2">{label}</p>	
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
  );
};

export default Navigation;