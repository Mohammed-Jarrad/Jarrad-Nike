import { star } from '../assets/icons'

const PopularProductCard = ({ product }) => {
	return (
		<div key={product.name} className="flex flex-col justify-center gap-2">
			<img src={product.imgURL} alt={`${product.name} photo`} className="max-w-full" />
			<p className="flex items-center gap-x-4">
				<img src={star} alt="star" />
				<span className="text-xl font-montserrat">(4.5)</span>
			</p>
			<p className="text-2xl font-semibold leading-10">{product.name}</p>
			<p className="font-semibold text-coral-red text-3xl font-palanquin leading-5">
				{product.price}
			</p>
		</div>
	)
}

export default PopularProductCard
