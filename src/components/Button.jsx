const Button = ({ label, iconURL, varient }) => {
	return (
		<button
			className={`
			flex justify-center items-center gap-2 py-4 px-7 
			font-montserrat text-lg leading-none rounded-full border 
			${
				varient && varient == 'outline'
					? 'bg-transparent text-black border-slate-500'
					: 'text-white border-coral-red bg-coral-red hover:bg-red-500 transition-all duration-300'
			}
		`}
		>
			{label}
			{iconURL && <img src={iconURL} alt="icon" className="rounded-full" />}
		</button>
	)
}

export default Button
