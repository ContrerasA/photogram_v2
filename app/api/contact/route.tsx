import FormData from 'form-data'
import Mailgun from 'mailgun.js'
import { NextResponse } from 'next/server'
import fs from 'fs'
import Handlebars from 'handlebars'

const mailgun = new Mailgun(FormData)
const mg = mailgun.client({
	username: 'api',
	key: process.env.MG_API_KEY!,
})

async function generateTemplate(data : any) {
	// let stream = fs.readFileSync('../../src/emailTemplates/contact-request.html')
	let stream = fs.readFileSync('./src/emailTemplates/contact-request.html')
	let source = stream.toString();
	let template = Handlebars.compile(source);
	let outputString = template(data);
	return outputString;
}
 
export async function POST(res: Request) {
	const data = await res.json();

	let emailTemplate = await generateTemplate(data);

	let messageParams = {
		from: 'Contact <info@photogrambooth.com>',
		to: 'contrerasanthonym@gmail.com',
		subject: 'New Contact Request',
		text: `This email renders using HTLM. If you're having trouble seeing this email, please contact us for a pdf attachment`,
		html: emailTemplate
	}

	
	mg.messages.create(process.env.MG_DOMAIN!, messageParams)
	
	console.log(`New contact request submitted: ${new Date()}`)

  return NextResponse.json({ hello: 'world' })
}