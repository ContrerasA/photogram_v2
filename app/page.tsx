import Navbar from "@/components/Global/Navbar";

import ServiceLocations from "@/components/home/ServiceLocations";
import Events from "@/components/home/Events";
import BoothPackages from "@/components/home/BoothPackages";
import VideoHero from "@/components/Global/VideoHero";
import ServicesDescription from "@/components/home/ServicesDescription";


export default function Home() {

	return (
		<main className="">
			<VideoHero
				path="/videos/Promo01.mp4"
				heading="Whether you're looking to rent a photo booth for a private, or corporate event, we have you covered"
				subtitle="This is a test"
			/>
			<ServicesDescription />
			<BoothPackages />
			<Events />
			<ServiceLocations />

			{/* space */}
			<div className="h-screen bg-gray-300">
			</div>
		</main>
	)
}
