import Hero from './sections/Hero'
import PopularProducts from './sections/PopularProducts'
import SuperQuality from './sections/SuperQuality'
import Services from './sections/Services'
import SepcialOffer from './sections/SepcialOffer'
import CustomersReviews from './sections/CustomerReviews'
import Subscribe from './sections/Subscribe'
import Footer from './sections/Footer'
import Nav from './components/Nav'

function App() {
	return (
		<main className="relative">
			<Nav />
			<section className="xl:padding-l wide:padding-r padding-b">
				<Hero />
			</section>
			<section className="padding">
				<PopularProducts />
			</section>
			<section className="padding">
				<SuperQuality />
			</section>
			<section className="padding">
				<Services />
			</section>
			<section className="padding">
				<SepcialOffer />
			</section>
			<section className="padding bg-pale-blue ">
				<CustomersReviews />
			</section>
			<section className="padding-x sm:py-32 py-16 w-full">
				<Subscribe />
			</section>
			<section className="bg-black padding-x padding-t pb-8 text-white">
				<Footer />
			</section>
		</main>
	)
}

export default App
