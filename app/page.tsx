'use client'
import Image from "next/image"
import React from "react"
import bg from "../assets/bg.jpg"
import profilePic from "../assets/ProfilePic.jpeg"

const Home = () => {
	return (
		<div className="overflow-y-hidden">
			<div className="relative z-[-1] bg-black">
				<Image
					src={bg}
					alt="bg_land"
					className="object-cover w-screen min-h-screen opacity-10"
				/>
			</div>
			<div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-[rgb(220,220,220)]">
				<div className="border border-[#5c5c5c] rounded-[100%] py-[70px] px-[50px] md:py-[120px] md:px-[100px] flex flex-col items-center justify-center">
					<Image src={profilePic} alt="profile_pic" className="object-cover w-32 h-32 rounded-[100%] md:w-60 md:h-60 border border-[#000000]"/>
					<h3 className="text-[rgb(156,156,156)] tracking-[0.3em] text-center text-sm md:text-md pt-10">Software Developer</h3>
					<h1 className="text-xl font-bold text-center md:text-3xl">Hi, my name is Lionel Arce</h1>
				</div>
			</div>
		</div>
	)
}

export default Home
