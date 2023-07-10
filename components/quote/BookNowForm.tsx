'use client';
import { scriptFont } from '@/src/utils/fontUtils';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import boothServices from '@/src/data/boothServices.json';
import boothFeatures from '@/src/data/boothFeatures.json';
import { BoothFeature, BoothService } from '@/src/types/boothTypes';

const BookNowForm = ({ quoteID }: { quoteID: string }) => {
	const [selectedBoothService, setSelectedBoothService] = useState<BoothService | null>(null);
	const [selectedBoothIncludedFeatures, setSelectedBoothIncludedFeatures] = useState<BoothFeature[] | null>(null);
	const [selectedBoothOptionalFeatures, setSelectedBoothOptionalFeatures] = useState<BoothFeature[] | null>(null);

	const { register, handleSubmit, watch, formState } = useForm({
		defaultValues: {
		}
	});

	function handlePackageSelection(boothID: string) {
		setSelectedBoothService(boothServices.find(el => el.boothID == boothID) as BoothService);

		let foundBoothFeatures = boothFeatures.filter(el => el.applicableBooths.includes(boothID) && el.featureType == 'included')

		setSelectedBoothIncludedFeatures(foundBoothFeatures as BoothFeature[])

		let optionalBoothFeatures = boothFeatures.filter(el => el.applicableBooths.includes(boothID) && el.featureType == 'optional')
		setSelectedBoothOptionalFeatures(optionalBoothFeatures as BoothFeature[])
	}


	async function onSubmit(data: any) {

	}

	useEffect(() => {
		console.log(selectedBoothIncludedFeatures)
	}, [selectedBoothIncludedFeatures])


	return (
		<div>
			<div className='flex w-full space-x-12'>
				<form onSubmit={handleSubmit(onSubmit)} className='w-1/2'>
					<label htmlFor="name" className='label'>Select Your Package</label>
					<div className="mb-4">
						<select name="" id="" className='input-field' placeholder='Select One' onChange={(e) => handlePackageSelection(e.target.value)} defaultValue={''}>
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
											<input type="checkbox" className="checkbox checkbox-primary " />
											<span className="label-text">{el.description} (${el.price})</span>
										</label>
									))}
								</div>
							</div>
						)
					}

					<div className='flex items-center space-x-2'>
						<button className="btn btn-primary">Continue</button>
						<p>(Clicking next will take you to the deposit payment screen)</p>
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