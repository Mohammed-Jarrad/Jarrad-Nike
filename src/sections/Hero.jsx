import { useState } from 'react'
import { arrowRight } from '../assets/icons'
import { bigShoe1 } from '../assets/images'
import Button from '../components/Button'
import ShoeCard from '../components/ShoeCard'
import { shoes, statistics } from '../constants'

const Hero = () => {
	const [bigShoeImage, setBigShowImage] = useState(bigShoe1)

	return (
		<section
			id="home"
			className="max-container w-full min-h-screen flex flex-col justify-center xl:flex-row gap-10"
		>
			<div className="z-10 flex flex-col items-start pt-28 xl:w-2/5 w-full max-xl:padding-x">
				<p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
				<h1 className="text-8xl font-bold mt-10 font-palanquin max-sm:text-[72px] max-sm:leading-[82px]">
					<span className="xl:bg-white xl:whitespace-nowrap pr-10 rounded-full ">
						The New Arrival
					</span>
					<br />
					<span className="text-coral-red inline-block mt-3 ">
						<span className="bg-coral-red text-white rounded-xl font-serif p-3">N</span>
						ike
					</span>
					{` Shoes`}
				</h1>
				<p className="text-slate-gray leading-8 mt-3 mb-14 pt-4 text-lg sm:max-w-sm">
					Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
				</p>
				<Button label="Shop Now" iconURL={arrowRight} />
				<div className="flex flex-wrap justify-start gap-16 mt-20 items-start w-full">
					{statistics.map((item, i) => (
						<div key={i}>
							<p className="text-4xl font-palanquin font-bold">{item.value}</p>
							<p className="leading-7 text-slate-gray font-montserrat">{item.label}</p>
						</div>
					))}
				</div>
			</div>

			<div className="relative flex-1 flex justify-center items-center bg-cover bg-primary bg-hero bg-center xl:min-h-screen max-xl:py-40 rounded-bl-[400px]">
				<img src={bigShoeImage} alt="collection of shoes" className="z-11 object-contain" />
				<div className="absolute bottom-[-50px] w-full flex justify-center items-center gap-10 max-sm:px-3">
					{shoes.map((shoe, i) => (
						<ShoeCard
							imageURL={shoe}
							setBigShoeImage={setBigShowImage}
							bigShoeImage={bigShoeImage}
							key={i}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Hero
