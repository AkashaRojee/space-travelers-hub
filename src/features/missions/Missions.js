import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from './missionsSlice';
const Missions = () => {
	const dispatch = useDispatch();
	const { missions } = useSelector((state) => state).missions;
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
								<button>Join Mission</button>
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
