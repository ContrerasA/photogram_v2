
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
				<p className={`${scriptFont.className} text-5xl mb-5`}> Book Now!</p>
				
				<BookNowForm quote={quote} />
			</section>

		</>
	)
}
