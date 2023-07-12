import { NextResponse } from 'next/server'
import { Stripe } from 'stripe'
import boothServices from '@/src/data/boothServices.json'
import boothFeatures from '@/src/data/boothFeatures.json'

const stripe = new Stripe(process.env.STRIPE_API_KEY as string, {
	apiVersion: '2022-11-15'
});

export async function POST(req: Request) {
	let data = await req.json();

	let selectedBooth = boothServices.find(el => el.boothID == data.packageSelection);
	let selectedOptionalFeatures = boothFeatures.filter(el => data.optionalFeatures.includes(el.id))


	let totalPrice = 0;
	totalPrice += selectedBooth?.basePrice!;
	selectedOptionalFeatures.map(el => {
		totalPrice += el.price;
	})

	// console.log(totalPrice);
	// console.log(data)
	// console.log(selectedBooth)
	// console.log(selectedOptionalFeatures)

	let description = `${selectedBooth.name}\n${data.eventOccasion}\n${data.eventDate}\n${data.eventLocation}\n\n${data.name}\n${data.email}\n\n`;
	description += `${selectedBooth?.name}: $${selectedBooth?.basePrice}\n`;
	selectedOptionalFeatures.map(el => {
		description += `${el.description}: $${el.price}\n`
	})

	description += `\nTotal: $${totalPrice}\nDeposit: $200\nRemaining Balance: $${totalPrice - 200}`

	

	// find customer
	let customer = null;
	let foundCustomer = await stripe.customers.search({
		query: `name:'${data.name}' AND email:'${data.email}'`
	});

	if (foundCustomer && foundCustomer.data && foundCustomer.data.length > 0) {
		customer = foundCustomer.data[0]
	} else {
		// Create customer
		customer = await stripe.customers.create({
			name: data.name,
			email: data.email,
			phone: data.phone
		})
	}

	// Create invoice
	const invoice = await stripe.invoices.create({
		customer: customer.id,
		description: description
	});

	// Create invoice Item
	const invoiceItem = await stripe.invoiceItems.create({
		customer: customer.id,
		amount: 20000,
		currency: 'usd',
		description: selectedBooth?.name,
		invoice: invoice.id
	})

	const finalizedInvoice = await stripe.invoices.finalizeInvoice(invoice.id);

	return NextResponse.json(data)
}

