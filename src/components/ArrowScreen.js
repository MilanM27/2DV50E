const ArrowScreen = ({
	position,
	angle,
	selectArrowScreenHandler,
	id,
	arrowScreensData,
}) => {
	const { top, right, bottom, left } = position;
	const activated = arrowScreensData.some((as) => as.id === id && as.activated);

	return (
		<div
			onClick={selectArrowScreenHandler}
			className='arrow__screen'
			style={{
				top: top,
				right: right,
				bottom: bottom,
				left: left,
				transform: `rotate(${angle}deg)`,
				backgroundColor: activated && '#03d303',
			}}
		/>
	);
};
export default ArrowScreen;
