import { NextResponse } from 'next/server'
 
export async function POST(req: Request) { 
	let data = await req.json();
	console.log(data)
  return NextResponse.json(data)
}

