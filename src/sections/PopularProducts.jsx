import PopularProductCard from '../components/PopularProductCard'
import { products } from '../constants'

const PopularProducts = () => {
	return (
		<section id="products" className="max-container">
			<div>
				<h2 className="text-4xl font-bold font-palanquin">
					Our
					<span className="text-coral-red">{` Porduct `}</span>
					Products
				</h2>
				<p className="info-text mt-5 max-w-2xl">
					Experience top-notch quality and style with our sought-after selections. Discover a world
					of comfort, design, and value
				</p>
			</div>

			<div className="mt-20 grid gap-x-2 gap-y-5 sm:gap-16 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
				{products.map(product => (
					<PopularProductCard product={product} key={product.name} />
				))}
			</div>
		</section>
	)
}

export default PopularProducts
