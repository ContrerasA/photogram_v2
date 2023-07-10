import FormData from 'form-data'
import Mailgun from 'mailgun.js'
import { NextResponse } from 'next/server'
import fs from 'fs'
import Handlebars from 'handlebars'
import { db } from '@/src/db/config'
import { NewQuote, Quote, quotes } from '@/src/db/schema/quotes'
import { nanoid } from 'nanoid'

const mailgun = new Mailgun(FormData)
const mg = mailgun.client({
	username: 'api',
	key: process.env.MG_API_KEY!,
})

async function generateTemplate(data : any) {
	let stream = fs.readFileSync('./src/emailTemplates/quote01.html')
	let source = stream.toString();
	let template = Handlebars.compile(source);
	let outputString = template(data);
	return outputString;
}

export async function GET(req: Request) {
	const res = await db.select().from(quotes);

	const newQuote : Quote = {
		id: nanoid(6).toUpperCase(),
		name: 'Bryana',
		email: 'BryanaMestas@gmail.com',
		eventDate: new Date('July 14, 2024').toDateString(),
		eventLocation: 'San Jose',
		eventOccasion: 'Wedding'
	}

	const insertRes = await db.insert(quotes).values(newQuote).returning();

		
	return NextResponse.json(insertRes[0])
	
}

export async function POST(req: Request) {
	const data = await req.json();

	const newQuote: Quote = {
		id: nanoid(12).toUpperCase(),
		name: data.name,
		email: data.email,
		eventDate: data.eventDate,
		eventLocation: data.eventLocation,
		eventOccasion: data.eventOccasion,
		createdOn: data.date
	}	

	const insertRes = await db.insert(quotes).values(newQuote).returning();
	const res = insertRes[0];

	let emailTemplate = await generateTemplate(data);

	let messageParams = {
		from: 'Photogram <info@photogrambooth.com>',
		to: data.email,
		bcc: 'contrerasanthonym@gmail.com',
		subject: "Here's your Photogram Photo Booth Quote!",
		text: `This email renders using HTLM. If you're having trouble seeing this email, please contact us for a pdf attachment`,
		html: emailTemplate
	}

	return NextResponse.json(res)

	// let emailRes = await mg.messages.create(process.env.MG_DOMAIN!, messageParams)

	// if (emailRes.status == 200) {
	// 	console.log(`New quote sent: ${data.date}: ${data.name}`);
	// 	return NextResponse.json({ status: 'success' })
	// } else {
	// 	return NextResponse.json({ status: 'error' })
	// }


}