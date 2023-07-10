import { db } from '@/src/db/config'
import { Quote, quotes } from '@/src/db/schema/quotes'
import React from 'react'
import { eq } from 'drizzle-orm'
import format from 'date-fns/format';

export default async function ({ params: { id } }: { params: { id: string } }){

	async function getQuote() : Promise<Quote> {
		const quoteRes = await db.select().from(quotes).where(eq(quotes.id, id));
		return quoteRes[0];
	}

	const quote : Quote = await Promise.resolve(getQuote())

	return (
		<>
			<section>
				<p>Event Informaiton:</p>
				<p>Name: {quote.name}</p>
				<p>Email : {quote.email}</p>
				<p>Event Date: {format(new Date(quote.eventDate as string), 'MMM d, yyy')}</p>
				<p>Event Occasion: {quote.eventOccasion}</p>
				<p>Event Location: {quote.eventLocation}</p>
			</section>
			<section></section>
		</>
	)
}
