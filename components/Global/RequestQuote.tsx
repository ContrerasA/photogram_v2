'use client';
import { scriptFont } from '@/src/utils/FontUtils'
import React, { useState } from 'react'

import serviceLocations from '@/src/data/serviceLocations.json'
import eventOccasions from '@/src/data/eventOccasions.json'
import { ContactState } from '../about/ContactForm';
import { useForm } from 'react-hook-form';
import format from 'date-fns/format';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';
import axios from 'axios';

interface PropTypes {
	imagePath: string
}


const RequestQuote = (props: PropTypes) => {
	const [contactState, setContactState] = useState<ContactState>('incomplete');
	const { register, handleSubmit, watch, formState } = useForm({
		defaultValues: {
			name: process.env.NODE_ENV !== 'production' ? 'Tonius' : '',
			email: process.env.NODE_ENV !== 'production' ? 'AmazeCPK@gmail.com' : '',
			eventDate: process.env.NODE_ENV !== 'production' ? new Date() : '',
			eventLocation: process.env.NODE_ENV !== 'production' ? 'San Jose' : '',
			eventOccasion: process.env.NODE_ENV !== 'production' ? 'Wedding' : '',
		}
	});

	const onSubmit = async (data: any) => {
		setContactState('submitting');
		data.date = format(new Date(), 'MMMM d, yyy @ h:m:aaa')
		data.eventDate = format(new Date(data.eventDate), 'MMMM d, yyy')
		let res = await axios.post(`/api/request-quote`, data)

		setTimeout(() => {
			setContactState('complete');
		}, 2000);
	}

	return (
		<section id='request-quote' className='w-full m-auto flex flex-col items-center mt-20'>
			<h1 className={`${scriptFont.className} text-5xl my-5`}>Instant Quote</h1>
			<p className=''>We offer fast, easy, and instant quotes.</p>
			<p className='text-sm'>If you&apos;d like to learn more, fill out the information below to receive an instant quote via email.</p>
			<p className='text-sm font-light'>Hate spam? Don&apos;t worry, we do too. We&apos;ll never send you unscolicited mail</p>
			<div className="flex flex-col lg:flex-row justify-center lg:space-x-20 mt-10 items-center w-full relative">
				<img src={props.imagePath} alt="" className='shadow-lg hidden lg:block h-[500px] w-[375px] object-cover lg:rounded-[2.5rem] ' />
				<form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-[90vw] lg:w-1/3 '>

					<div className="mb-4">
						<label htmlFor="name" className='label'>Name</label>
						<input type="text" id='name' required {...register("name")} className='input-field' />
					</div>

					<div className="mb-4">
						<label htmlFor="email" className='label'>Email</label>
						<input type="email" id='email' required {...register("email")} className='input-field' />
					</div>

					<div className="mb-4">
						<label htmlFor="eventDate" className='label'>Event Date</label>
						<input type="date" id='eventDate' required {...register("eventDate")} className='input-field' />
					</div>

					<div className="mb-4">
						<label htmlFor="eventLocation" className='label'>Event Location</label>
						<select id="eventLocation" required {...register("eventLocation")} className='input-field'>
							{serviceLocations.map((el, index) => (
								<option key={index} value={el.city}>{el.city}, {el.state}</option>
							))}
						</select>
					</div>

					<div className="mb-4">
						<label htmlFor="eventOccasion" className='label'>Event Occasion</label>
						<select id='eventOccasion' required {...register("eventOccasion")} className='input-field'>
							{eventOccasions.map((el, index) => (
								<option key={index} value={el}>{el}</option>
							))}
						</select>
					</div>

					<div className="mt-5 flex justify-center">
						<input type="submit" className="btn btn-primary" />
					</div>

				</form>

				{contactState === 'submitting' && (

					<div className="flex flex-col justify-center items-center absolute top-0 left-0 h-full w-full bg-white bg-opacity-90">
						<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900">
						</div>
						<p className="mt-10 text-xl text-accent font-bold">SUBMITTING...</p>
					</div>
				)}

				{contactState === 'complete' && (
					<div className="flex flex-col justify-center items-center absolute top-0 left-0 h-full w-full bg-white bg-opacity-90">
						<FaCheck className="h-32 w-32 text-green-300" />
						<p className="mt-10 text-xl text-accent font-bold">Instant Quote Sent</p>
						<p className="text-lg">Please check your inbox</p>
						<Link href="/"><button className="btn btn-primary mt-5">RETURN HOME</button></Link>
					</div>
				)}
			</div>
		</section>
	)
}

export default RequestQuote