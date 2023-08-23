import { headerLogo } from '../assets/images/index'
import { hamburger } from '../assets/icons/index'
import { navLinks } from '../constants'
import { useEffect, useRef, useState } from 'react'

const Nav = () => {
	const [showNav, setShowNav] = useState(true)
	const lastScrollY = useRef(0)
	const [scrollPosition, setScrollPosition] = useState(0)
	const [scrollPercentage, setScrollPercentage] = useState(0)
	const [showLinks, setShowLinks] = useState(false)
	const linksUL = useRef(null)
	const buttonRef = useRef(null)

	const handleScrolling = () => {
		const windowHeight = window.innerHeight
		const scrollHeight = document.documentElement.scrollHeight - windowHeight
		const scrolled = window.scrollY
		const newScrollPercentage = (scrolled / scrollHeight) * 100
		setScrollPercentage(newScrollPercentage)
		setScrollPosition(window.scrollY)
		if (window.scrollY > lastScrollY.current) {
			setShowNav(false)
			setShowLinks(false)
		} else {
			setShowNav(true)
		}
		lastScrollY.current = window.scrollY
	}
	const handleClickOutSideUL = e => {
		if (
			linksUL.current &&
			!linksUL.current.contains(e.target) &&
			buttonRef.current &&
			!buttonRef.current.contains(e.target)
		) {
			setShowLinks(false)
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', handleScrolling)
		window.addEventListener('mousedown', handleClickOutSideUL)
		return () => {
			window.removeEventListener('mousedown', handleClickOutSideUL)
			window.removeEventListener('scroll', handleScrolling)
		}
	}, [])

	// useEffect(() => {

	// 	return () => {

	// 	}
	// }, [])

	return (
		<>
			<header
				className={`
					padding-x fixed left-[50%] translate-x-[-50%] z-[200]  overflow-visible
					bg-primary w-full shadow-nav top-0 
					${scrollPosition !== 0 && 'min-h-[5px]'}
				`}
			>
				<nav
					className={`
						flex justify-between items-center max-container h-[60px] relative
						${showNav ? 'clip-rect-full' : 'clip-rect-hidden'}
					`}
				>
					<a href="/">
						<img src={headerLogo} alt="Logo" width={130} height={29} />
					</a>
					<div className="lg:hidden cursor-pointer" onClick={() => setShowLinks(p => !p)}>
						<img src={hamburger} alt="Hamburger" width={25} height={25} ref={buttonRef} />
					</div>
				</nav>

				<ul
					className={`
						flex-1 flex justify-center items-center gap-8 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] 
						${!showNav && 'hidden'}
						${showLinks ? 'max-lg:clip-rect-full' : ' max-lg:clip-rect-hidden'}
						max-lg:nav-links-small
					`}
					ref={linksUL}
				>
					{navLinks.map(item => (
						<li key={item.label}>
							<a
								href={item.href}
								className="
								font-montserrat font-medium leading-normal 
								text-lg-black hover:text-coral-red transition-all duration-300
								"
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>

				<div
					className={`h-[5px] bg-blue-400 absolute bottom-0 left-0 rounded-full`}
					style={{ width: `${scrollPercentage}%` }}
				/>
			</header>
		</>
	)
}

export default Nav
