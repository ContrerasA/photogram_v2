import Navbar from "@/components/global/Navbar";

import ServiceLocations from "@/components/home/ServiceLocations";
import Events from "@/components/home/Events";
import BoothServices from "@/components/home/BoothServices";
import VideoHero from "@/components/global/VideoHero";
import ServicesDescription from "@/components/home/ServicesDescription";
import RequestQuote from "@/components/global/RequestQuote";


export default function Home() {

	return (
		<main className="">
			{/* <VideoHero
				path="/videos/Promo01.mp4"
				heading="Whether you're looking to rent a photo booth for a private, or corporate event, we have you covered"
				subtitle="Have a look at our Bay Area Photo Booth Packages Now"
				button={{text: 'Photo Booth Packages', path: '#booth-packages'}}
			/> */}
			<ServicesDescription />
			<BoothServices />
			<Events />
			<RequestQuote imagePath='/images/eventImages/premiumBooth01.jpg'/>
			<ServiceLocations />

		</main>
	)
}
