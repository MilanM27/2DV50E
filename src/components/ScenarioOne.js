import { useState } from 'react';
import { scenario1 } from '../scenario1data';
import ArrowScreen from './ArrowScreen';
import FloorOptions from './FloorOptions';
import DirectionsViewScreen from './DirectionsViewScreen';
import SmokeSensor from './SmokeSensor';
import Lamp from './Lamp';
import Crowd from './Crowd';

const ScenarioOne = () => {
	const [scenarioData] = useState(scenario1);
	const [sensorsF1, setSensorsF1] = useState(scenario1[0].sensors);
	const [lampsF1] = useState(scenario1[0].lamps);
	const [exitPathwaysF1, setExitPathwaysF1] = useState(
		scenario1[0].exitPathways
	);
	const [arrowScreensF1, setArrowScreensF1] = useState(
		scenario1[0].arrowScreens
	);
	const [alarm, setAlarm] = useState(false);
	const [selectedFloor, setSelectedFloor] = useState(1);
	const [selectedDirectionView, setSelectedDirectionView] = useState(1);
	const [indicatorLights, setIndicatorLights] = useState({
		north: '#d3d3d3',
		east: '#d3d3d3',
		south: '#d3d3d3',
		west: '#d3d3d3',
	});

	const selectFloorHandler = (e) => {
		setSelectedFloor(parseInt(e.target.id));
	};

	const activateSensorHandler = (id) => {
		const updatedSensorData = sensorsF1.map((sensor) => {
			if (sensor.id === id) {
				const updatedSensor = {
					...sensor,
					activated: !sensor.activated,
				};
				return updatedSensor;
			}
			return sensor;
		});

		const alarmActive = updatedSensorData.some((s) => s.activated);

		let updatedExitPathways;

		// Reset crowding indicator after every a threat is over
		if (!alarmActive) {
			updatedExitPathways = exitPathwaysF1.map((ep) => ({
				...ep,
				crowded: false,
			}));
			setExitPathwaysF1(updatedExitPathways);
		} else {
			updatedExitPathways = exitPathwaysF1;
		}

		setIndicatorLights({
			north: getIndicatorColorCode(
				1,
				alarmActive,
				updatedSensorData,
				updatedExitPathways
			),
			east: getIndicatorColorCode(
				2,
				alarmActive,
				updatedSensorData,
				updatedExitPathways
			),
			south: getIndicatorColorCode(
				3,
				alarmActive,
				updatedSensorData,
				updatedExitPathways
			),
			west: getIndicatorColorCode(
				4,
				alarmActive,
				updatedSensorData,
				updatedExitPathways
			),
		});

		setAlarm(alarmActive);
		setSensorsF1(updatedSensorData);
	};

	const crowdExitPathwayHandler = (id) => {
		const updatedExitPathwayData = exitPathwaysF1.map((ep) => {
			if (ep.id === id) {
				const updatedExitPathway = {
					...ep,
					crowded: !ep.crowded,
				};
				return updatedExitPathway;
			}
			return ep;
		});

		setIndicatorLights({
			north: getIndicatorColorCode(1, alarm, sensorsF1, updatedExitPathwayData),
			east: getIndicatorColorCode(2, alarm, sensorsF1, updatedExitPathwayData),
			south: getIndicatorColorCode(3, alarm, sensorsF1, updatedExitPathwayData),
			west: getIndicatorColorCode(4, alarm, sensorsF1, updatedExitPathwayData),
		});
		setExitPathwaysF1(updatedExitPathwayData);
	};

	const selectArrowScreenHandler = (id) => {
		setSelectedDirectionView(id);
		const updatedArrowScreensData = arrowScreensF1.map((as) => {
			if (as.id === id) {
				const updatedArrowScreen = {
					...as,
					activated: !as.activated,
				};
				return updatedArrowScreen;
			} else {
				return { ...as, activated: false };
			}
		});

		setArrowScreensF1(updatedArrowScreensData);
	};

	const getIndicatorColorCode = (direction, alarm, sensors, exitPathways) => {
		if (!alarm) {
			return '#d3d3d3';
		} else if (sensors.some((s) => s.id === direction && s.activated)) {
			return '#ff0000';
		} else if (exitPathways.some((ep) => ep.id === direction && ep.crowded)) {
			return '#ffff00';
		} else {
			return '#03d303';
		}
	};

	return (
		<>
			<DirectionsViewScreen
				selectedDirectionView={selectedDirectionView}
				alarmActive={alarm}
				indicatorLights={indicatorLights}
			/>
			<div style={{ position: 'relative' }}>
				<img src={scenarioData[selectedFloor - 1].img} alt={`scenario`} />
				{arrowScreensF1.map((as) => {
					return (
						<ArrowScreen
							position={as.position}
							angle={as.angle}
							key={as.id}
							id={as.id}
							selectArrowScreenHandler={() => selectArrowScreenHandler(as.id)}
							arrowScreensData={arrowScreensF1}
						/>
					);
				})}

				{sensorsF1.map((s) => (
					<SmokeSensor
						position={s.position}
						activateSensorHandler={() => activateSensorHandler(s.id)}
						activated={s.activated}
						key={s.id}
					/>
				))}
				{lampsF1.map((l) => (
					<Lamp
						id={l.id}
						position={l.position}
						activeSensor={sensorsF1.some((s) => s.id === l.id && s.activated)}
						alarm={alarm}
						crowded={exitPathwaysF1.some((ep) => ep.id === l.id && ep.crowded)}
					/>
				))}
				{exitPathwaysF1.map((ep) => (
					<Crowd
						position={ep.position}
						crowded={ep.crowded}
						crowdExitPathway={() => crowdExitPathwayHandler(ep.id)}
						key={ep.id}
						alarm={alarm}
					/>
				))}
			</div>
			<FloorOptions
				amount={scenarioData}
				selectFloorHandler={selectFloorHandler}
				selectedFloor={selectedFloor}
			/>
		</>
	);
};

export default ScenarioOne;
