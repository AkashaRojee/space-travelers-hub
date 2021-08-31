import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
								<span className={`${ mission.joined ? 'joined' : ''}`} >{!mission.joined ? 'NOT A MEMBER': 'Active Member' }</span>
							</td>
							<td>
								<button className={`${ mission.joined ? 'joined' : ''}`} onClick={() => handleJoinMission(mission.mission_id, mission.joined )}>{!mission.joined ? 'Join Mission' : 'leave Mission' }</button>
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
