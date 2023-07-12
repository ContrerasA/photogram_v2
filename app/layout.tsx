'use client';
import './globals.css'

import Navbar from '@/components/global/Navbar'
import Footer from '@/components/global/Footer'

import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useEffect } from 'react'

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

	function tagManager(w, d, s, l, i) {
		w[l] = w[l] || []; w[l].push({
			'gtm.start':
				new Date().getTime(), event: 'gtm.js'
		}); var f = d.getElementsByTagName(s)[0],
			j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
				'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
	}

	useEffect(() => {
		tagManager(window, document, 'script', 'dataLayer', 'GTM-W8J2W3Z')
	})

	return (
		<html lang="en" data-theme='light'>

			<body className={inter.className}>
				<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W8J2W3Z"
					height="0" width="0" ></iframe></noscript>
				<Navbar />
				<div className=''>
					{children}
				</div>
				<Footer />
			</body>
		</html>
	)
}
