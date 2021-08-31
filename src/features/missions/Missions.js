import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, joinMission, leaveMission } from './missionsSlice';

const Missions = () => {
	const dispatch = useDispatch();
	const [joined, setjoined] = useState(false);
	const { missions } = useSelector((state) => state).missions;
	const handleJoinMission = (id) => {
		if(!joined) {
			setjoined(true);
			dispatch(joinMission(id));
		} else {
			dispatch(leaveMission(id));
			setjoined(false);
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
								<span>Not a member</span>
							</td>
							<td>
								<button onClick={() => handleJoinMission(mission.mission_id)}>Join Mission</button>
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
