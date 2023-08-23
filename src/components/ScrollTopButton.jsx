import { useEffect, useState } from 'react'
import { arrowRight } from '../assets/icons'

const ScrollTopButton = () => {
	const [showButton, setShowButton] = useState(false)

	const handleShowButton = () => {
		if (window.scrollY > 200) {
			setShowButton(true)
		} else {
			setShowButton(false)
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', handleShowButton)
		return () => {
			window.removeEventListener('scroll', handleShowButton)
		}
	}, [])

	return (
		<button
			className={`fixed bottom-14 right-14 z-50  p-2 bg-coral-red rounded-full animate-pulse ${
				!showButton && 'hidden'
			}`}
			onClick={() => {
				window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
			}}
		>
			<img src={arrowRight} alt="" className="-rotate-90" />
		</button>
	)
}

export default ScrollTopButton
