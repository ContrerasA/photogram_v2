'use client';
import { scriptFont } from '@/src/utils/fontUtils';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import boothServices from '@/src/data/boothServices.json';
import boothFeatures from '@/src/data/boothFeatures.json';
import { BoothFeature, BoothService } from '@/src/types/boothTypes';
import { Quote } from '@/src/db/schema/quotes';
import format from 'date-fns/format';
import axios from 'axios';

import serviceLocations from '@/src/data/serviceLocations.json'
import eventOccasions from '@/src/data/eventOccasions.json'

const BookNowForm = ({ quote }: { quote: Quote }) => {
	const [selectedBoothService, setSelectedBoothService] = useState<BoothService | null>(null);
	const [selectedBoothIncludedFeatures, setSelectedBoothIncludedFeatures] = useState<BoothFeature[] | null>(null);
	const [selectedBoothOptionalFeatures, setSelectedBoothOptionalFeatures] = useState<BoothFeature[] | null>(null);
	const [totalCost, setTotalCost] = useState<number>(0);

	const { register, handleSubmit, getValues, setValue } = useForm({
	});

	function handlePackageSelection(boothID: string) {
		// @ts-ignore
		setValue('packageSelection', boothID);
		setValue('optionalFeatures', []);

		const foundBoothService = boothServices.find(el => el.boothID == boothID) as BoothService;

		setSelectedBoothService(foundBoothService);

		let foundBoothFeatures = boothFeatures.filter(el => el.applicableBooths.includes(boothID) && el.featureType == 'included')

		setSelectedBoothIncludedFeatures(foundBoothFeatures as BoothFeature[])

		let optionalBoothFeatures = boothFeatures.filter(el => el.applicableBooths.includes(boothID) && el.featureType == 'optional')
		setSelectedBoothOptionalFeatures(optionalBoothFeatures as BoothFeature[])

		const foundOptionalFeatureCheckBoxes = Array.from(document.getElementsByClassName('checkbox')) as HTMLInputElement[];
		foundOptionalFeatureCheckBoxes.forEach(el => {
			el.checked = false
		})

		setTotalCost(foundBoothService.basePrice)

	}

	function handleOptionalFeatureSelected(id: number, value: boolean): void {
		let optionalFeatures: number[] = [...getValues().optionalFeatures]

		if (value == false) {
			let foundIndex = optionalFeatures.findIndex(el => el == id);
			if (foundIndex > -1) {
				optionalFeatures.splice(foundIndex, 1);
			}
		} else {
			optionalFeatures.push(id);
		}
		
		// @ts-ignore
		setValue('optionalFeatures', optionalFeatures);

		// Calculate Cost
		let calculatedCost = 0;

		if (selectedBoothService) {
			calculatedCost += selectedBoothService.basePrice
		}

		if (optionalFeatures && optionalFeatures.length > 0) {
			boothFeatures.map(el => {
				if (optionalFeatures.includes(el.id)) {
					calculatedCost += el.price;
				}
			})
		}

		setTotalCost(calculatedCost);
	}

	async function onSubmit(data: any) {
		data.date = format(new Date(), 'MMMM d, yyy, @ h:m aaa');
		data.quoteID = quote.id;
		let res = await axios.post('/api/book', data)
	}

	return (
		<div className='flex space-x-10'>
			<form onSubmit={handleSubmit(onSubmit)} className='w-1/2 '>
				<div className='w-2/3 mb-5'>
					<p className='mb-2'>Do we have your information correct?</p>
					<div className='flex'>
						<p className='w-2/5'>Name:</p>
						<input type="text" id='name' required {...register("name")} className='w-1/2' defaultValue={quote.name!} />

					</div>
					<hr />
					<div className='flex'>
						<p className='w-2/5'>Email: </p>
						<input type="email" id='email' required {...register("email")} className='w-1/2' defaultValue={quote.email!} />
					</div>
					<hr />
					<div className='flex'>
						<p className='w-2/5'>Event Date: </p>
						<input type="date" id='eventDate' required {...register("eventDate")} className='w-1/2' defaultValue={quote.eventDate!} />
					</div>
					<hr />
					<div className='flex'>
						<p className='w-2/5'>Event Occasion: </p>
						<select id='eventOccasion' required {...register("eventOccasion")} className='w-1/2' defaultValue={quote.eventOccasion!}>
							{eventOccasions.map((el, index) => (
								<option key={index} value={el}>{el}</option>
							))}
						</select>
					</div>
					<hr />
					<div className='flex'>
						<p className='w-2/5'>Event Location: </p>
						<select id="eventLocation" required {...register("eventLocation")} className='' defaultValue={quote.eventLocation!}>
							{serviceLocations.map((el, index) => (
								<option key={index} value={el.city}>{el.city}, {el.state}</option>
							))}
						</select>
					</div>
					<hr />

				</div>

				<label htmlFor="name" className='label'>Select Your Package</label>
				<div className="mb-4">
					<select
						className='input-field'
						placeholder='Select One'
						onChange={(e) => handlePackageSelection(e.target.value)}
						defaultValue={''}>
						<option value="" disabled className='hidden'>Select One</option>
						{
							boothServices.map(el => (
								<option key={el.id} value={el.boothID}>{el.name} (${el.basePrice})</option>
							))
						}
					</select>
				</div>
				{
					selectedBoothOptionalFeatures && (
						<div className="mb-4">
							<label htmlFor="name" className='label'>Optional Features</label>
							<div className='flex flex-wrap'>
								{selectedBoothOptionalFeatures && selectedBoothOptionalFeatures.map(el => (
									<label key={el.id} className="label cursor-pointer space-x-2 basis-1/2 justify-start">
										<input type="checkbox" id='message' className="checkbox checkbox-primary" onChange={(e) => handleOptionalFeatureSelected(el.id, e.target.checked)} />
										<span className="label-text">{el.description} (${el.price})</span>
									</label>
								))}
							</div>
						</div>
					)
				}

				<div className='my-4'>
					<p>Total Cost: ${totalCost}</p>
					<p>Deposit Due: ${selectedBoothService ? 200 : 0}</p>
				</div>

				<div className='flex items-center space-x-2'>
					<button className="btn btn-primary">Continue</button>
				</div>

			</form>
			<div>
				<p className={`${scriptFont.className} text-4xl text-center`}>{selectedBoothService?.name}</p>
				{
					selectedBoothIncludedFeatures && selectedBoothIncludedFeatures.map(el => (
						<div key={el.id}>
							<p>{el.description}</p>
						</div>
					))
				}
			</div>

		</div>
	)
}

export default BookNowForm