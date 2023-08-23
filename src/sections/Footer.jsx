import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
	return (
		<section className="max-container flex flex-col gap-20">
			<div className="flex items-start lg:gap-16 gap-8 flex-wrap">
				<div className="flex flex-col">
					<img
						src={footerLogo}
						alt="FooterLogo"
						width={140}
						height={46}
						className="sm:max-w-full m-0"
					/>
					<p className="info-text max-w-sm !text-[17px] mt-8">
						Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In
						Store. Get Rewards
					</p>
					<div className="flex items-center gap-8 mt-4">
						{socialMedia.map(icon => (
							<img
								src={icon.src}
								alt={icon.alt}
								key={icon.alt}
								className="p-3 bg-white rounded-full"
							/>
						))}
					</div>
				</div>
				{footerLinks.map(item => (
					<div key={item.title} className="">
						<h2 className="text-2xl font-medium font-montserrat">{item.title}</h2>
						<ul className="mt-8 flex flex-col">
							{item.links.map(link => (
								<a
									className="text-slate-gray hover:text-gray-400 font-montserrat"
									key={link.name}
									href={link.link}
								>
									{link.name}
								</a>
							))}
						</ul>
					</div>
				))}
			</div>

			<div className="flex justify-between flex-wrap gap-1">
				<p>&copy; Copyright. All rights reserved.</p>
				<p>Terms & Conditions</p>
			</div>
		</section>
	)
}

export default Footer
