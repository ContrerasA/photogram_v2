import Confetti from '@/components/global/Confetti'
import { scriptFont } from '@/src/utils/fontUtils'
import Script from 'next/script'
import React from 'react'

const BookingThankYou = () => {
	return (
		<>
			<Script id='ga-conversion-tracking'>
				{`
				  gtag('event', 'conversion', {
						'send_to': 'AW-10801341731/hc16COaQ47oYEKPKvZ4o',
						'value': 35.0,
						'currency': 'USD',
						'transaction_id': ''
				  });
				`}
			</Script>
			<section className='text-center h-[500px] flex flex-col justify-center relative'>
				<p className={`${scriptFont.className} text-6xl`}>Contratulations!</p>
				<p>You&#39;re all set!</p>
				<p>Thank You For Booking With Photogram Photo Booth</p>
				<p>We&#39;ll contact you shortly to confirm, as well as how to proceed with the next steps for your booking</p>

				<Confetti />
			</section>
		</>
	)
}

export default BookingThankYou