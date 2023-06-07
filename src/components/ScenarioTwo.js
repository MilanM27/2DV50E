import { useState } from 'react';
import { scenario2 } from '../scenario2data';
import Lamp from './Lamp';
import ArrowScreen from './ArrowScreen';
import FloorOptions from './FloorOptions';
import DirectionsViewScreen from './DirectionsViewScreen';
import Crowd from './Crowd';
import SmokeSensor from './SmokeSensor';

const ScenarioTwo = () => {
	const [scenarioData] = useState(scenario2);
	const [selectedFloor, setSelectedFloor] = useState(1);
	const [alarm, setAlarm] = useState(false);
	const [lampsF1] = useState(scenario2[0].lamps);
	const [lampsF2] = useState(scenario2[1].lamps);
	const [exitPathwaysF1, setExitPathwaysF1] = useState(
		scenario2[0].exitPathways
	);
	const [exitPathwaysF2, setExitPathwaysF2] = useState(
		scenario2[1].exitPathways
	);
	const [sensorsF1, setSensorsF1] = useState(scenario2[0].sensors);
	const [sensorsF2, setSensorsF2] = useState(scenario2[1].sensors);
	const [arrowScreensF1, setArrowScreensF1] = useState(
		scenario2[0].arrowScreens
	);
	const [arrowScreensF2] = useState(scenario2[1].arrowScreens);
	const [selectedDirectionView, setSelectedDirectionView] = useState(1);
	const [indicatorLightsF1, setIndicatorLightsF1] = useState({
		north: '#d3d3d3',
		east: '#d3d3d3',
		south: '#d3d3d3',
		west: '#d3d3d3',
	});
	const [indicatorLightsF2, setIndicatorLightsF2] = useState({
		north: '#d3d3d3',
		east: '#d3d3d3',
		south: '#d3d3d3',
		west: '#d3d3d3',
	});

	const selectFloorHandler = (e) => {
		if (selectedFloor === 2) {
			arrowScreensF1.map((as) =>
				as.id === 1 ? (as.activated = true) : (as.activated = false)
			);
			setSelectedDirectionView(1);
		} else if (selectedFloor === 1) {
			setSelectedDirectionView(1);
		}

		setSelectedFloor(parseInt(e.target.id));
	};

	const activateSensorHandler = (id) => {
		const updatedSensorsF1Data = sensorsF1.map((sensorF1) => {
			if (sensorF1.id === id) {
				const updatedSensorF1Data = {
					...sensorF1,
					activated: !sensorF1.activated,
				};

				return updatedSensorF1Data;
			}
			return sensorF1;
		});

		const updatedSensorsF2Data = sensorsF2.map((sensorF2) => {
			if (sensorF2.id === id) {
				const updatedSensorF2Data = {
					...sensorF2,
					activated: !sensorF2.activated,
				};

				return updatedSensorF2Data;
			}
			return sensorF2;
		});

		const alarmActive =
			updatedSensorsF1Data.some((s) => s.activated) ||
			updatedSensorsF2Data.some((s) => s.activated);

		let updatedExitPathwaysF1;
		let updatedExitPathwaysF2;
		// Reset crowding indicator after every a threat is over
		if (!alarmActive) {
			updatedExitPathwaysF1 = exitPathwaysF1.map((ep) => ({
				...ep,
				crowded: false,
			}));
			setExitPathwaysF1(updatedExitPathwaysF1);
			updatedExitPathwaysF2 = exitPathwaysF2.map((ep) => ({
				...ep,
				crowded: false,
			}));
			setExitPathwaysF2(updatedExitPathwaysF2);
		} else {
			updatedExitPathwaysF1 = exitPathwaysF1;
			updatedExitPathwaysF2 = exitPathwaysF2;
		}

		setIndicatorLightsF1({
			east: getIndicatorColorCode(
				13,
				alarmActive,
				updatedSensorsF1Data,
				updatedExitPathwaysF1
			),
			south: getIndicatorColorCode(
				12,
				alarmActive,
				updatedSensorsF1Data,
				updatedExitPathwaysF1
			),
			west: getIndicatorColorCode(
				11,
				alarmActive,
				updatedSensorsF1Data,
				updatedExitPathwaysF1
			),
		});

		setIndicatorLightsF2({
			east: getIndicatorColorCode(
				22,
				alarmActive,
				updatedSensorsF2Data,
				updatedExitPathwaysF2,
				updatedSensorsF1Data.some((sf1) => sf1.id === 13 && sf1.activated)
			),
			west: getIndicatorColorCode(
				21,
				alarmActive,
				updatedSensorsF2Data,
				updatedExitPathwaysF2,
				updatedSensorsF1Data.some((sf1) => sf1.id === 11 && sf1.activated)
			),
		});

		setAlarm(alarmActive);
		setSensorsF1(updatedSensorsF1Data);
		setSensorsF2(updatedSensorsF2Data);
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

	const crowdExitPathwayHandler = (id) => {
		if (id === 21 || id === 22) {
			const updatedExitPathwayDataF2 = exitPathwaysF2.map((epf2) => {
				if (epf2.id === id) {
					const updatedExitPathway = {
						...epf2,
						crowded: !epf2.crowded,
					};
					return updatedExitPathway;
				}
				return epf2;
			});

			setIndicatorLightsF2({
				east: getIndicatorColorCode(
					22,
					alarm,
					sensorsF2,
					updatedExitPathwayDataF2,
					sensorsF1.some((sf1) => sf1.id === 13 && sf1.activated)
				),
				west: getIndicatorColorCode(
					21,
					alarm,
					sensorsF2,
					updatedExitPathwayDataF2,
					sensorsF1.some((sf1) => sf1.id === 11 && sf1.activated)
				),
			});

			setExitPathwaysF2(updatedExitPathwayDataF2);
		}

		const updatedExitPathwayDataF1 = exitPathwaysF1.map((epf1) => {
			if (epf1.id === id) {
				const updatedExitPathway = {
					...epf1,
					crowded: !epf1.crowded,
				};
				return updatedExitPathway;
			}
			return epf1;
		});

		setIndicatorLightsF1({
			east: getIndicatorColorCode(
				13,
				alarm,
				sensorsF1,
				updatedExitPathwayDataF1
			),
			south: getIndicatorColorCode(
				12,
				alarm,
				sensorsF1,
				updatedExitPathwayDataF1
			),
			west: getIndicatorColorCode(
				11,
				alarm,
				sensorsF1,
				updatedExitPathwayDataF1
			),
		});

		setExitPathwaysF1(updatedExitPathwayDataF1);
	};

	// Activate corresponding sensor on F2 if F1 is activated
	const sensorActivationHandler = (id) => {
		if (id === 21 && sensorsF1.some((s) => s.id === 11 && s.activated)) {
			return true;
		}

		if (id === 22 && sensorsF1.some((s) => s.id === 13 && s.activated)) {
			return true;
		}

		if (sensorsF2.some((s) => s.id === id && s.activated)) {
			return true;
		}

		if (sensorsF1.some((s) => s.id === id && s.activated)) {
			return true;
		}

		return false;
	};

	const getIndicatorColorCode = (
		direction,
		alarm,
		sensors,
		exitPathways,
		forceRed,
		forceYellow
	) => {
		if (forceRed) {
			return '#ff0000';
		} else if (forceYellow) {
			return '#ffff00';
		} else if (!alarm) {
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
			{selectedFloor === 1 && (
				<DirectionsViewScreen
					selectedDirectionView={selectedDirectionView}
					alarmActive={alarm}
					indicatorLights={indicatorLightsF1}
					sensors={sensorsF1}
					floor={selectedFloor}
					scenario={2}
				/>
			)}
			{selectedFloor === 2 && (
				<DirectionsViewScreen
					selectedDirectionView={selectedDirectionView}
					alarmActive={alarm}
					indicatorLights={indicatorLightsF2}
					sensors={sensorsF2}
					floor={selectedFloor}
					scenario={2}
				/>
			)}
			<div style={{ position: 'relative' }}>
				{selectedFloor === 1 && (
					<div>
						<img src={scenarioData[selectedFloor - 1].img} alt={`scenario`} />
						{arrowScreensF1.map((as) => (
							<ArrowScreen
								position={as.position}
								angle={as.angle}
								id={as.id}
								key={as.id}
								selectArrowScreenHandler={() => selectArrowScreenHandler(as.id)}
								arrowScreensData={arrowScreensF1}
							/>
						))}
						{lampsF1.map((l) => (
							<Lamp
								id={l.id}
								position={l.position}
								activeSensor={sensorActivationHandler(l.id)}
								alarm={alarm}
								crowded={exitPathwaysF1.some(
									(ep) => ep.id === l.id && ep.crowded
								)}
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
						{sensorsF1.map((s) => (
							<SmokeSensor
								position={s.position}
								activateSensorHandler={() => activateSensorHandler(s.id)}
								activated={s.activated}
								key={s.id}
							/>
						))}
					</div>
				)}
				{selectedFloor === 2 && (
					<div>
						<img src={scenarioData[selectedFloor - 1].img} alt={`scenario`} />
						{arrowScreensF2.map((as) => (
							<ArrowScreen
								position={as.position}
								angle={as.angle}
								id={as.id}
								selectArrowScreenHandler={() => selectArrowScreenHandler(as.id)}
								arrowScreensData={arrowScreensF2}
							/>
						))}
						{lampsF2.map((l) => (
							<Lamp
								id={l.id}
								position={l.position}
								activeSensor={sensorActivationHandler(l.id)}
								alarm={alarm}
								crowded={exitPathwaysF2.some(
									(ep) => ep.id === l.id && ep.crowded
								)}
							/>
						))}
						{exitPathwaysF2.map((ep) => (
							<Crowd
								position={ep.position}
								crowded={ep.crowded}
								crowdExitPathway={() => crowdExitPathwayHandler(ep.id)}
								key={ep.id}
								alarm={alarm}
							/>
						))}
						{sensorsF2.map((s) => (
							<SmokeSensor
								position={s.position}
								activateSensorHandler={() => activateSensorHandler(s.id)}
								activated={s.activated}
								key={s.id}
							/>
						))}
					</div>
				)}
			</div>
			<FloorOptions
				amount={scenarioData}
				selectFloorHandler={selectFloorHandler}
				selectedFloor={selectedFloor}
			/>
		</>
	);
};

export default ScenarioTwo;
