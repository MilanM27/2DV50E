const FloorsOptions = ({ amount, selectFloorHandler, selectedFloor }) => {
	return (
		<div className='floors__screen'>
			<p>FLOORS</p>
			{amount.map((f) => (
				<button
					onClick={selectFloorHandler}
					id={f.floor}
					style={{ backgroundColor: selectedFloor === f.floor && 'white' }}
					key={f.id}
				>
					{f.floor}
				</button>
			))}
		</div>
	);
};

export default FloorsOptions;
