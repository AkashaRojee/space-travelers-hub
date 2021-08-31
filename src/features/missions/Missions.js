import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableHeader from '../../app/common/missinTableHeader';
import TableBody from '../../app/common/missionTableBody';
import { getMissions, joinMission, leaveMission } from './missionsSlice';

const Missions = () => {
	const dispatch = useDispatch();
	const { missions } = useSelector((state) => state).missions;
	const handleJoinMission = (id, joined) => {
		if(!joined) {
			dispatch(joinMission(id));
		} else {
			dispatch(leaveMission(id));
		}
	}
	useEffect(() => {
		dispatch(getMissions());
	}, [dispatch]);
	return (
		<section className='missions-section'>
			<table className="mission-table">
				<TableHeader />
				<TableBody onJoinMission={handleJoinMission} missions={missions}/>
			</table>
		</section>
	);
};

export default Missions;
