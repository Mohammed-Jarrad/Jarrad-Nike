const ShoeCard = ({ bigShoeImage, setBigShoeImage, imageURL }) => {
	const handleClickImg = () => {
		if (bigShoeImage !== imageURL.bigShoe) {
			setBigShoeImage(imageURL.bigShoe)
		}
	}

	return (
		<div
			className={`p-3 bg-cover bg-card bg-center cursor-pointer rounded-[8px]  ${
				bigShoeImage === imageURL.bigShoe ? 'border-2 border-coral-red' : 'border-transparent'
			}
				flex justify-center items-center max-sm:flex-1
			`}
			onClick={handleClickImg}
		>
			<img
				src={imageURL.thumbnail}
				alt="shoe img"
				height={103}
				width={127}
				className="object-cover"
			/>
		</div>
	)
}

export default ShoeCard
