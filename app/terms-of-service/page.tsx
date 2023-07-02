import React from 'react'

import tos from '@/src/data/termsOfService.json'

 
const TermsOfService = () => {
  return (
	  <section>
		  <p className="text-3xl my-10 text-center">Terms and Conditions of Service</p>
			<hr className="my-10" />

			<div className="mx-5 md:mx-24">
				{tos.map((el, index) =>
					<div key={index}>
						<p key={index} className="text-lg">{el.title}</p>
						{el.lines.map((line, lineIndex) =>
							<p key={lineIndex} className="ml-5">{line}</p>
						)}
						<div className="mb-5"></div>
					</div>
				)}
			</div>
	 </section>
  )
}

export default TermsOfService