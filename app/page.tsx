import Image from "next/image"
import React from "react"
import bg from "../assets/bg.jpg"


const Home = () => {
	return (
		<div>
			<div className="relative z-[-1] bg-black">
				<Image
					src={bg}
					alt="bg_land"
					className="w-screen min-h-screen bg-cover opacity-20"
				/>
			</div>
		</div>
	)
}

export default Home
