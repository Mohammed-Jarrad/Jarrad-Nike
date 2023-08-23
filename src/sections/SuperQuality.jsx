import { shoe8 } from '../assets/images'
import Button from '../components/Button'

const SuperQuality = () => {
	return (
		<section
			id="about-us"
			className="max-container flex gap-16 flex-row max-lg:flex-col max-lg:gap-4 "
		>
			<div className="flex-1 flex flex-col justify-around">
				<h2 className="text-4xl font-bold font-palanquin">
					We Provide You <span className="text-coral-red">Super</span>
					<br />
					<span className="text-coral-red">{`Quality `}</span>Shoes
				</h2>
				<div>
					<p className="info-text lg:max-w-lg max-lg:mt-4">
						Ensuring premium comfort and style, our meticulously crafted footwear is designed to
						elevate your experience, providing you with unmatched quality, innovation, and a touch
						of elegance.
					</p>
					<p className="info-text mt-6 lg:max-w-lg">
						Our dedication to detail and excellence ensures your satisfaction
					</p>
				</div>
				<div>
					<Button label={'View More'} />
				</div>
			</div>

			<div className="flex-1 flex justify-center items-center">
				<img src={shoe8} alt="Shoe8" />
			</div>
		</section>
	)
}

export default SuperQuality
