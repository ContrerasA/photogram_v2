import './globals.css'

import Navbar from '@/components/global/Navbar'
import Footer from '@/components/global/Footer'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Photogram Photo Booth',
	description: 'Bay Area Photo Booth Rentals',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" data-theme='light'>
			<body className={inter.className}>
				<Navbar />
				<div className=''>
					{children}
				</div>
				<Footer />
			</body>
		</html>
	)
}
