const SmokeSensor = ({ position, activated, id, activateSensorHandler }) => {
	return (
		<div
			className='sensor'
			style={{
				top: position.top,
				right: position.right,
				bottom: position.bottom,
				left: position.left,
				backgroundColor: activated && 'red',
			}}
			onClick={activateSensorHandler}
			id={id}
		/>
	);
};

export default SmokeSensor;
