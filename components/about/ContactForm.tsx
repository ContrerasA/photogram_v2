import React from 'react'

const ContactForm = () => {
	return (
		<div>
			<p className="text-3xl text-center">Have Further Questions?</p>
			<p className="text-lg text-center">Feel free to us either by email info@photogrambooth.com or by simply filling out the form below</p>
			<p className="text-lg text-center">You may also reach us by phone <a href="tel:408-703-5994" className="text-blue-400">(408) 703-5994</a></p>
			<p className="text-md text-center">Response typically with 12 hours</p>


			<div className="flex items-center justify-center relative my-10">
				<div className="w-full max-w-2xl">
					<form>
						<div className="mb-4">
							<label htmlFor="name" className='label'>Name</label>
							<input type="text" name='name' className='input-field'/>
						</div>
						<div className="mb-4">
							<label htmlFor="email" className='label'>Email</label>
							<input type="email" name='email' className='input-field'/>
						</div>
						<div className="mb-4">
							<label htmlFor="message" className='label'>Message</label>
							<textarea name='message' rows={8} className='input-field' />
						</div>
						<div className="mb-4 flex justify-center">
							<input type="submit" className="btn btn-primary" />
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ContactForm