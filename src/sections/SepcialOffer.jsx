import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'
import Button from '../components/Button'

const SepcialOffer = () => {
	return (
		<section className="max-container flex justify-between items-center gap-16 max-lg:flex-col-reverse">
			<div className="flex-1 flex justify-center items-center">
				<img src={offer} alt="Offer" className="w-[500px] max-w-full" />
			</div>

			<div className="flex-1">
				<h2 className="text-4xl font-bold font-palanquin mb-10 max-lg:mb-5">
					<span className="text-coral-red">{`Special `}</span> Offer
				</h2>
				<p className="info-text mb-7 max-lg:mb-2">
					Embark on a shopping journey that redefines your experience with unbeatable deals. From
					premier selections to incredible savings, we offer unparalleled value that sets us apart.
				</p>
				<p className="info-text">
					Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the
					loftiest expectations. Your journey with us is nothing short of exceptional.
				</p>
				<div className="flex gap-5 mt-10 items-center flex-wrap">
					<Button iconURL={arrowRight} label={'Shop now'} />
					<Button label={'Learn more'} varient={'outline'} />
				</div>
			</div>
		</section>
	)
}

export default SepcialOffer
