import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Crowd = ({
	position: { top, right, bottom, left },
	crowdExitPathway,
	crowded,
	alarm,
}) => {
	let indicator;

	if (crowded && alarm) {
		indicator = 'red';
	} else {
		indicator = 'green';
	}

	return (
		<FontAwesomeIcon
			icon={faPeopleGroup}
			className='exit__pathway'
			style={{
				top: top,
				right: right,
				bottom: bottom,
				left: left,
				color: indicator,
				pointerEvents: !alarm && 'none',
			}}
			onClick={crowdExitPathway}
		/>
	);
};
export default Crowd;
