import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, joinMission, leaveMission } from './missionsSlice';

const Missions = () => {
	const dispatch = useDispatch();
	const { missions } = useSelector((state) => state).missions;
	const handleJoinMission = (id, joined) => {
		if(!joined) {
		console.log(joined, id);
			dispatch(joinMission(id));
		} else {
		console.log(joined, id);
			dispatch(leaveMission(id));
		}
	}
	console.log(missions);
	useEffect(() => {
		dispatch(getMissions());
	}, [dispatch]);
	return (
		<section className='missions-section'>
			<table className="mission-table">
				<thead>
					<tr>
						<th>Missions</th>
						<th>Descripition</th>
						<th>Status</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{
						missions.map((mission) => (
							<tr key={mission.mission_id}>
							<td>{mission.mission_name}</td>
							<td>
								{mission.description}
							</td>
							<td>
								<span className={`${ mission.joined ? 'joined' : ''}`} >Not a member</span>
							</td>
							<td>
								<button className={`${ mission.joined ? 'joined' : ''}`} onClick={() => handleJoinMission(mission.mission_id, mission.joined )}>Join Mission</button>
							</td>
						</tr>
						))
					}
        </tbody>
			</table>
		</section>
	);
};

export default Missions;
