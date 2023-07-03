import { scriptFont } from '@/src/utils/fontUtils'
import React from 'react'

import privacyPolicies from '@/src/data/privacyPolicy.json'

const PrivacyPolicy = () => {
	return (
		<section className='w-full flex flex-col items-center mt-20'>
			<p className={`${scriptFont.className} text-6xl mb-5`}>Privacy Policy</p>
			<div className='mx-10'>
				{privacyPolicies.map((policy, index) => (
					<div key={index}>
						<p className="text-lg">
							{policy.title}
						</p>
						{policy.lines.map((line, lineIndex) => (
							<p key={lineIndex} className="ml-5">
								• {line}
							</p>
						))}
					</div>
				))}

			</div>
		</section>
	)
}

export default PrivacyPolicy