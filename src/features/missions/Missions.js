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
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              porro necessitatibus maiores sequi. Dicta libero facere iste
              adipisci odit recusandae quae fuga impedit cupiditate, sint deleniti
              laboriosam
            </td>
            <td>
              <span>Not a member</span>
            </td>
            <td>
              <button>Join Mission</button>
            </td>
          </tr>
        </tbody>
			</table>
		</section>
	);
};

export default Missions;
