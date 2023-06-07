import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUpLong,
	faDownLong,
	faLeftLong,
	faRightLong,
} from '@fortawesome/free-solid-svg-icons';

const DirectionsViewScreen = ({
	selectedDirectionView,
	indicatorLights,
	exitPathways,
	alarm,
	scenario,
	floor,
}) => {
	const handleHideArrow = () => {
		if (scenario === 2 && floor === 2) {
			return 'hidden';
		} else if (scenario === 2 && floor === 1) {
			return 'hidden';
		} else {
			return 'visible';
		}
	};

	const handleHideArrow2 = () => {
		if (scenario === 2 && floor === 2) {
			return 'hidden';
		} else if (scenario === 2 && floor === 1) {
			return 'visible';
		}
	};

	return (
		<div className='directions-view-screen'>
			{selectedDirectionView === 1 && (
				<div className='directions-view-screen__arrows'>
					<p>WEST</p>
					<div className='pos-relative'>
						<FontAwesomeIcon
							className='arrow'
							icon={faUpLong}
							style={{ color: indicatorLights.east }}
						/>
						<p className='pos-absolute pos-up-arrow text-shadow'>10</p>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-evenly',
							width: '290px',
						}}
						className='pos-relative'
					>
						<div style={{ visibility: handleHideArrow() }}>
							<FontAwesomeIcon
								className='arrow'
								icon={faLeftLong}
								style={{ color: indicatorLights.north }}
							/>
							<p className='pos-absolute pos-right-arrow text-shadow'>13</p>
						</div>
						<div style={{ visibility: handleHideArrow2() }}>
							<FontAwesomeIcon
								className='arrow'
								icon={faRightLong}
								style={{ color: indicatorLights.south }}
							/>
							<p className='pos-absolute pos-left-arrow text-shadow'>13</p>
						</div>
					</div>
					<div className='pos-relative'>
						<FontAwesomeIcon
							className='arrow'
							icon={faDownLong}
							style={{ color: indicatorLights.west }}
						/>
						<p className='pos-absolute pos-down-arrow text-shadow'>10</p>
					</div>
					<p>EAST</p>
					<div className='pos-relative'>
						<FontAwesomeIcon
							className='arrow'
							icon={faUpLong}
							style={{ color: indicatorLights.west }}
						/>
						<p className='pos-absolute pos-up-arrow text-shadow'>10</p>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-evenly',
							width: '290px',
						}}
						className='pos-relative'
					>
						<div style={{ visibility: handleHideArrow2() }}>
							<FontAwesomeIcon
								className='arrow'
								icon={faLeftLong}
								style={{
									color: indicatorLights.south,
								}}
							/>
							<p className='pos-absolute pos-right-arrow text-shadow'>13</p>
						</div>
						<div style={{ visibility: handleHideArrow() }}>
							<FontAwesomeIcon
								className='arrow'
								icon={faRightLong}
								style={{ color: indicatorLights.north }}
							/>
							<p className='pos-absolute pos-left-arrow text-shadow'>13</p>
						</div>
					</div>
					<div className='pos-relative'>
						<FontAwesomeIcon
							className='arrow'
							icon={faDownLong}
							style={{ color: indicatorLights.east }}
						/>
						<p className='pos-absolute pos-down-arrow text-shadow'>10</p>
					</div>
				</div>
			)}
			{selectedDirectionView === 2 && (
				<div className='directions-view-screen__arrows'>
					<p>NORTH</p>
					<div className='pos-relative'>
						<FontAwesomeIcon
							className='arrow'
							icon={faUpLong}
							style={{ color: indicatorLights.south }}
						/>
						<p className='pos-absolute pos-up-arrow text-shadow'>10</p>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-evenly',
							width: '290px',
						}}
						className='pos-relative'
					>
						<div>
							<FontAwesomeIcon
								className='arrow'
								style={{ color: indicatorLights.east }}
								icon={faLeftLong}
							/>
							<p className='pos-absolute pos-right-arrow text-shadow'>13</p>
						</div>
						<div>
							<FontAwesomeIcon
								className='arrow'
								icon={faRightLong}
								style={{ color: indicatorLights.west }}
							/>
							<p className='pos-absolute pos-left-arrow text-shadow'>13</p>
						</div>
					</div>
					<div
						className='pos-relative'
						style={{ visibility: handleHideArrow() }}
					>
						<FontAwesomeIcon
							className='arrow'
							icon={faDownLong}
							style={{ color: indicatorLights.north }}
						/>
						<p className='pos-absolute pos-down-arrow text-shadow'>10</p>
					</div>
					<p>SOUTH</p>
					<div
						className='pos-relative'
						style={{ visibility: handleHideArrow() }}
					>
						<FontAwesomeIcon
							className='arrow'
							icon={faUpLong}
							style={{ color: indicatorLights.north }}
						/>
						<p className='pos-absolute pos-up-arrow text-shadow'>10</p>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-evenly',
							width: '290px',
						}}
						className='pos-relative'
					>
						<div>
							<FontAwesomeIcon
								className='arrow'
								icon={faLeftLong}
								style={{ color: indicatorLights.west }}
							/>
							<p className='pos-absolute pos-left-arrow text-shadow'>13</p>
						</div>
						<div>
							<FontAwesomeIcon
								className='arrow'
								style={{ color: indicatorLights.east }}
								icon={faRightLong}
							/>
							<p className='pos-absolute pos-right-arrow text-shadow'>13</p>
						</div>
					</div>
					<div className='pos-relative'>
						<FontAwesomeIcon
							className='arrow'
							icon={faDownLong}
							style={{ color: indicatorLights.south }}
						/>
						<p className='pos-absolute pos-down-arrow text-shadow'>10</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default DirectionsViewScreen;
