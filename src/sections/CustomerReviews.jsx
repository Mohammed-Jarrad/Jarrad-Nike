import { star } from '../assets/icons'
import { reviews } from '../constants'

const CustomerReviews = () => {
	return (
		<section className="max-container">
			<h2 className="text-center text-4xl font-bold font-palanquin mb-2">
				What Out <span className="text-coral-red">{`Customers `}</span> Says
			</h2>
			<p className="text-center max-w-lg mr-auto ml-auto info-text">
				Hear genuine stories from our satisfied customers about their exceptional experiences with
				us.
			</p>
			<div className="mt-16 flex justify-center items-stretch gap-32 max-lg:flex-col max-lg:items-center max-lg:gap-8">
				{reviews.map(review => (
					<div key={review.customerName} className="flex flex-col items-center justify-between gap-3">
						<img
							src={review.imgURL}
							alt="review img"
							className="w-[100px] h-[100px] object-cover rounded-full"
						/>

						<p className="max-w-xs text-center info-text">{review.feedback}</p>
						<div className="flex items-center gap-2">
							<img src={star} alt="Star" />
							<span className="text-xl text-slate-gray font-montserrat">{`(${review.rating})`}</span>
						</div>
						<h3 className="text-3xl font-medium font-montserrat">{review.customerName}</h3>
					</div>
				))}
			</div>
		</section>
	)
}

export default CustomerReviews
