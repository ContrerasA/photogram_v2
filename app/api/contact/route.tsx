import FormData from 'form-data'
import Mailgun from 'mailgun.js'
import { NextResponse } from 'next/server'
import fs from 'fs'

const mailgun = new Mailgun(FormData)
const mg = mailgun.client({
	username: 'api',
	key: process.env.MG_API_KEY!,
})

async function generateTemplate(data) {
	// let stream = fs.readFileSync('../../src/emailTemplates/contact-request.html')
	let stream = fs.readFileSync('./src/emailTemplates/contact-request.html')
	let source = stream.toString();
}
 
export async function POST(req, res) {
	let data = req.body;

	generateTemplate(data);

	let messageParams = {
		from: 'Contact <info@photogrambooth.com>',
		to: 'contrerasanthonym@gmail.com',
		subject: 'New Contact Request',
		text: `This email renders using HTLM. If you're having trouble seeing this email, please contact us for a pdf attachment`,
	}

	console.log(`New contact request submitted: ${new Date()}`)

	// mg.messages.create(process.env.MG_DOMAIN!, messageParams)


  return NextResponse.json({ hello: 'world' })
}