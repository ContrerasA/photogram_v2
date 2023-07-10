
import { db } from '@/src/db/config'
import { Quote, quotes } from '@/src/db/schema/quotes'
import React from 'react'
import { eq } from 'drizzle-orm'
import format from 'date-fns/format';
import { useForm } from 'react-hook-form';
import BookNowForm from '@/components/quote/BookNowForm';
import { scriptFont } from '@/src/utils/fontUtils';

export default async function ({ params: { id } }: { params: { id: string } }) {

	async function getQuote(): Promise<Quote> {
		const quoteRes = await db.select().from(quotes).where(eq(quotes.id, id));
		return quoteRes[0];
	}

	const quote: Quote = await Promise.resolve(getQuote())


	// async function onSubmit(data: any) {

	// }

	return (
		<>

			<section>
				<p className={`${scriptFont.className} text-5xl`}> Book Now!</p>
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
			</section>

			<section>
				<BookNowForm quoteID={quote.id} />
			</section>

		</>
	)
}
