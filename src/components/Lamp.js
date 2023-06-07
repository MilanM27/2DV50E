const Lamp = ({ position, activeSensor, alarm, crowded }) => {
	let indication;
	if (activeSensor) {
		indication = '#ff0000';
	} else if (crowded && alarm) {
		indication = '#ffff00';
	} else if (alarm) {
		indication = '#03d303';
	}

	return (
		<div
			className='lamp'
			style={{
				top: position.top,
				right: position.right,
				bottom: position.bottom,
				left: position.left,
				backgroundColor: indication,
			}}
		/>
	);
};

export default Lamp;
