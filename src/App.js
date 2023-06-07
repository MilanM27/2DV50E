import { useState } from 'react';
import ScenarioOne from './components/ScenarioOne';
import ScenarioOptions from './components/ScenarioOptions';
import ScenarioTwo from './components/ScenarioTwo';
// import ScenarioThree from './components/ScenarioThree';

function App() {
	const [selectedScenario, setSelectedScenario] = useState('1');

	const onClickHandler = (e) => {
		setSelectedScenario(e.target.value);
	};

	return (
		<div className='app'>
			<ScenarioOptions
				onClickHandler={onClickHandler}
				selectedScenario={selectedScenario}
			/>
			<div className='app__screen'>
				{selectedScenario === '1' && <ScenarioOne />}
				{selectedScenario === '2' && <ScenarioTwo />}
			</div>
		</div>
	);
}

export default App;
