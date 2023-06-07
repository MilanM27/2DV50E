const ScenarioOptions = ({ onClickHandler, selectedScenario }) => {
	return (
		<div className='scenarios__screen'>
			<p>SCENARIOS</p>
			<div className='scenarios__screen__buttons'>
				<button
					onClick={onClickHandler}
					value={1}
					style={{ backgroundColor: selectedScenario === '1' && 'white' }}
				>
					1
				</button>
				<button
					onClick={onClickHandler}
					value={2}
					style={{ backgroundColor: selectedScenario === '2' && 'white' }}
				>
					2
				</button>
				<button
					onClick={onClickHandler}
					value={3}
					style={{ backgroundColor: selectedScenario === '3' && 'white' }}
				>
					3
				</button>
			</div>
		</div>
	);
};

export default ScenarioOptions;
