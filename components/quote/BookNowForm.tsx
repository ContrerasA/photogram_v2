'use client';
import { scriptFont } from '@/src/utils/fontUtils';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import boothServices from '@/src/data/boothServices.json';
import boothFeatures from '@/src/data/boothFeatures.json';
import { BoothFeature, BoothService } from '@/src/types/boothTypes';
import { boolean } from 'drizzle-orm/pg-core';
import { Quote } from '@/src/db/schema/quotes';
import format from 'date-fns/format';

const BookNowForm = ({ quote }: { quote: Quote }) => {
	const [selectedBoothService, setSelectedBoothService] = useState<BoothService | null>(null);
	const [selectedBoothIncludedFeatures, setSelectedBoothIncludedFeatures] = useState<BoothFeature[] | null>(null);
	const [selectedBoothOptionalFeatures, setSelectedBoothOptionalFeatures] = useState<BoothFeature[] | null>(null);
	const [addedBoothOptionalFeatures, setAddedBoothOptionalFeatures] = useState();

	const { register, handleSubmit, watch, formState, getValues, setValue } = useForm({
		defaultValues: {
			packageSelection: null,
			optionalFeatures: []
		}
	});

	const watchSelectedBoothService = watch("packageSelection")


	function handlePackageSelection(boothID: string) {
		// @ts-ignore
		setValue('packageSelection', boothID);
		setValue('optionalFeatures', []);



		setSelectedBoothService(boothServices.find(el => el.boothID == boothID) as BoothService);

		let foundBoothFeatures = boothFeatures.filter(el => el.applicableBooths.includes(boothID) && el.featureType == 'included')

		setSelectedBoothIncludedFeatures(foundBoothFeatures as BoothFeature[])

		let optionalBoothFeatures = boothFeatures.filter(el => el.applicableBooths.includes(boothID) && el.featureType == 'optional')
		setSelectedBoothOptionalFeatures(optionalBoothFeatures as BoothFeature[])

		const foundOptionalFeatureCheckBoxes = Array.from(document.getElementsByClassName('checkbox')) as HTMLInputElement[];
		foundOptionalFeatureCheckBoxes.forEach(el => {
			el.checked = false
		})
	}


	async function onSubmit(data: any) {
		console.log(data)
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


		console.log(optionalFeatures);
	}

	return (
		<div>
<p className='mb-2'>Do we have your information correct?</p>
				<div className="flex flex-col w-1/4">
					<div className='flex'>
						<p className='basis-1/2'>Name:</p>
						<p className='basis-1/2'>{quote.name}</p>
					</div>
					<hr />
					<div className='flex'>
						<p className='basis-1/2'>Email: </p>
						<p className='basis-1/2'>{quote.email}</p>
					</div>
					<hr />
					<div className='flex'>
						<p className='basis-1/2'>Event Date: </p>
						<p className='basis-1/2'>{format(new Date(quote.eventDate as string), 'MMM d, yyy')}</p>
					</div>
					<hr />
					<div className='flex'>
						<p className='basis-1/2'>Event Occasion: </p>
						<p className='basis-1/2'>{quote.eventOccasion}</p>
					</div>
					<hr />
					<div className='flex'>
						<p className='basis-1/2'>Event Location: </p>
						<p className='basis-1/2'>{quote.eventLocation}</p>
					</div>
					<hr />

				</div>

			<div className='flex w-full space-x-12'>
				<form onSubmit={handleSubmit(onSubmit)} className='w-1/2'>
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
											{/* <input type="checkbox" id='message' className="checkbox checkbox-primary" {...register(`optionalFeatures.[${el.id}]`)} /> */}
											<span className="label-text">{el.description} (${el.price})</span>
										</label>
									))}
								</div>
							</div>
						)
					}

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

		</div>
	)
}

export default BookNowForm