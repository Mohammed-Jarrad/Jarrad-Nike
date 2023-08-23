import { services } from '../constants'

const Services = () => {
	return (
		<section id="services" className="max-container flex items-stretch flex-wrap gap-10">
			{services.map(service => (
				<ServiceCard key={service.label} service={service} />
			))}
		</section>
	)
}

export const ServiceCard = ({ service }) => {
	return (
		<div key={service.label} className="py-10 px-8 shadow-3xl flex-1 rounded-3xl">
			<img src={service.imgURL} alt={service.label} className="p-2 bg-coral-red rounded-full" />
			<h1 className="font-medium font-palanquin text-3xl my-3">{service.label}</h1>
			<p className="info-text">{service.subtext}</p>
		</div>
	)
}

export default Services
