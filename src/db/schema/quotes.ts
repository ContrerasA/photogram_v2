import { InferModel } from "drizzle-orm";
import { pgTable, text, date} from "drizzle-orm/pg-core";

export const quotes = pgTable('quotes', {
	id: text('id').primaryKey(),
	name: text('name'),
	email: text('email'),
	eventOccasion: text('eventOccasion'),
	eventDate: date('eventDate'),
	eventLocation: text('eventLocation'),
	createdOn: date('createdOn')
})

export type Quote = InferModel<typeof quotes>;