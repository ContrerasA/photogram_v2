import Confetti from '@/components/global/Confetti'
import { scriptFont } from '@/src/utils/fontUtils'
import React from 'react'

const BookingThankYou = () => {
  return (
	  <section className='text-center h-[500px] flex flex-col justify-center relative'>
		  <p className={`${scriptFont.className} text-6xl`}>Contratulations!</p>
		  <p>You&#39;re all set!</p>
		  <p>Thank You For Booking With Photogram Photo Booth</p>
		  <p>We&#39;ll contact you shortly to confirm, as well as how to proceed with the next steps for your booking</p>
			
		  <Confetti/>
	 </section>
  )
}

export default BookingThankYou