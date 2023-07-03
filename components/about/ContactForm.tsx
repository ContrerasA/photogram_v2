'use client';

import React, { Fragment, useState } from 'react'

import axios from 'axios';
import format from 'date-fns/format';
import { useForm } from 'react-hook-form'
import Link from 'next/link';

import {FaCheck} from 'react-icons/fa'
import { scriptFont } from '@/src/utils/fontUtils';

export type ContactState = 'incomplete' | 'submitting' | 'complete' | 'error';

const ContactForm = () => {
	const [contactState, setContactState] = useState<ContactState>('incomplete');

	const { register, handleSubmit, watch, formState } = useForm({
		defaultValues: {
			name: process.env.NODE_ENV !== 'production' ? 'Anthony C' : '',
			email: process.env.NODE_ENV !== 'production' ? 'test@gmail.com' : '',A
			message: process.env.NODE_ENV !== 'production' ? 'I was wondering...' : '',
		}
	});

	const onSubmit = async (data: any) => {
		setContactState('submitting');
		data.date = format(new Date(), 'MMMM d, yyy @ h:m:aaa')
		let res = await axios.post(`/api/contact`, data)

		setTimeout(() => {
			setContactState('complete');
		}, 2000);
	}

	return (
		<div>
			<p className={`${scriptFont.className} text-6xl text-center`} >Have Further Questions?</p>
			<p className="text-lg text-center">Feel free to us either by email info@photogrambooth.com or by simply filling out the form below</p>
			<p className="text-lg text-center">You may also reach us by phone <a href="tel:408-703-5994" className="text-blue-400">(408) 703-5994</a></p>
			<p className="text-md text-center">Response typically with 12 hours</p>


			<div className="flex items-center justify-center relative my-10">
				<div className="w-full max-w-2xl">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="mb-4">
							<label htmlFor="name" className='label'>Name</label>
							<input type="text" id='name' {...register("name")} className='input-field' />
						</div>
						<div className="mb-4">
							<label htmlFor="email" className='label'>Email</label>
							<input type="email" id='email' {...register("email")} className='input-field' />
						</div>
						<div className="mb-4">
							<label htmlFor="message" className='label'>Message</label>
							<textarea id='message' rows={8} {...register("message")} className='input-field' />
						</div>
						<div className="mb-4 flex justify-center">
							<input type="submit" className="btn btn-primary" />
						</div>
					</form>
				</div>

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
						<p className="mt-10 text-xl text-accent font-bold">REQUEST SENT</p>
						<p className="text-lg">We&apos;ll get back to you as soon as we can</p>
						<Link href="/"><button className="btn btn-primary mt-5">RETURN HOME</button></Link>
					</div>
				)}
			</div>
		</div>
	)
}

export default ContactForm