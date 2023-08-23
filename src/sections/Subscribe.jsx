import Button from '../components/Button'

const Subscribe = () => {
	return (
		<section
			className="max-container flex gap-32 items-center lg:justify-between 
		max-lg:flex-col max-lg:gap-8"
		id="contact-us"
		>
			<div>
				<h2
					className="font-bold font-palanquin text-4xl 
				lg:whitespace-nowrap 

				"
				>
					Sign Up for <span className="text-coral-red">{`Updates `}</span>
					<br />& NewsLetter
				</h2>
			</div>

			<div
				className="flex justify-between gap-16 sm:border-2 p-2 rounded-full
				max-sm:flex-col max-sm:w-full max-sm:gap-2
			"
			>
				<input type="text" placeholder="email@example.com" className="input" />
				<Button label={'Sign Up'} />
			</div>
		</section>
	)
}

export default Subscribe
