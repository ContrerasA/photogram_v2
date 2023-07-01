import { scriptFont } from '@/src/Utils/FontUtils'
import React from 'react'

import frequentlyAskedQuestions from '@/src/data/frequentlyAskedQuestions.json'
import ContactForm from '@/components/about/ContactForm'

const About = () => {
	return (
		<div className='mt-20 w-full flex flex-col items-center'>
			<div className="flex flex-col items-center text-center w-1/2">
				<p className={`${scriptFont.className} text-6xl`}>Who We Are</p>
				<p>Photogram Photo Booth is a Bay Area based company focused on making your event the most memorable.</p>
				<p>We cater to providing our clients with a unique, proffessional, and personalized experience that will be sure to a memorable impression on your guests. We'll work with you ensuring that all the details of your photo booth rental are perfect, and to your expectations.</p>
				<img src="/images/promoImages/wedding-Photo-Props-7_h861dd.jpg" alt="" className='max-h-96' />

			</div>
			<div className="flex flex-col items-center text-center w-1/2 mt-20">
				<p className={`${scriptFont.className} text-6xl`}>FAQ</p>
				<p className='my-5'>
					Have any questions? Feel free to look through our FAQ below
				</p>

				{frequentlyAskedQuestions.map(el => (
					<div className='mb-3'>
						<p className='font-bold'>
							Q: {el.question}
						</p>
						<p>
							{el.answer}
						</p>
					</div>
				))}
			</div>

			<div className='mt-20'>
				<ContactForm />
			</div>
		</div>
	)
}

export default About