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
	let stream = fs.readFileSync('./src/emailTemplates/quote01.html')
	let source = stream.toString();
	let template = Handlebars.compile(source);
	let outputString = template(data);
	return outputString;
}

export async function POST(res: Request) {
	const data = await res.json();

	let emailTemplate = await generateTemplate(data);

	let messageParams = {
		from: 'Photogram <info@photogrambooth.com>',
		to: data.email,
		bcc: 'contrerasanthonym@gmail.com',
		subject: "Here's your Photogram Photo Booth Quote!",
		text: `This email renders using HTLM. If you're having trouble seeing this email, please contact us for a pdf attachment`,
		html: emailTemplate
	}

	let emailRes = await mg.messages.create(process.env.MG_DOMAIN!, messageParams)

	if (emailRes.status == 200) {
		console.log(`New quote sent: ${data.date}: ${data.name}`);
		return NextResponse.json({ status: 'success' })
	} else {
		return NextResponse.json({ status: 'error' })
	}


}