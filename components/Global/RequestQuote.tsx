'use client';
import { scriptFont } from '@/src/Utils/FontUtils'
import React from 'react'

import serviceLocations from '@/src/data/serviceLocations.json'
import eventOccasions from '@/src/data/eventOccasions.json'

interface PropTypes {
	imagePath: string
}

const RequestQuote = (props: PropTypes) => {
	return (
		<section id='request-quote' className='w-full m-auto flex flex-col items-center mt-20'>
			<h1 className={`${scriptFont.className} text-5xl my-5`}>Instant Quote</h1>
			<p className=''>We offer fast, easy, and instant quotes.</p>
			<p className='text-sm'>If you'd like to learn more, fill out the information below to receive an instant quote via email.</p>
			<div className="flex justify-center space-x-20 mt-10 items-center">
				<img src={props.imagePath} alt="" className='shadow-lg h-[500px] w-[375px] object-cover rounded-[2.5rem]' />
				<form action="" className=''>
					<div className="mb-4">
						<label htmlFor="name" className='label'>Name</label>
						<input type="text" id='name' name='name' className='input-field' />
					</div>
					<div className="mb-4">
						<label htmlFor="email" className='label'>Email</label>
						<input type="email" id='email' name='email' className='input-field' />
					</div>
					<div className="mb-4">
						<label htmlFor="eventDate" className='label'>Event Date</label>
						<input type="date" id='eventDate' name='eventDate' className='input-field' />
					</div>
					<div className="mb-4">
						<label htmlFor="eventLocation" className='label'>Event Location</label>
						<select name="eventLocation" id="eventLocation" className='input-field'>
							{serviceLocations.map((el, index) => (
								<option key={index} value={el.city}>{el.city}, {el.state}</option>
							))}
						</select>
					</div>
					<div className="mb-4">
						<label htmlFor="eventOccasion" className='label'>Event Occasion</label>
						<select name="eventOccasion" id='eventOccasion' className='input-field'>
							{eventOccasions.map((el, index) => (
								<option key={index} value={el}>{el}</option>
							))}
						</select>
					</div>

					<div className="mt-5 flex justify-center">
						<input type="submit" className="btn btn-primary" />
					</div>

				</form>
			</div>
		</section>
	)
}

export default RequestQuote