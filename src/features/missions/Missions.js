import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from './missionsSlice';
const Missions = () => {
  const dispatch =  useDispatch();
  const { missions } =  useSelector((state) => state).missions;
  console.log(missions);
  useEffect(() => {
    dispatch(getMissions())
  }, [dispatch]);
  return (<div>
    {
      missions.map((mission) => <p key={mission.mission_id}>{mission.description}</p>)
    }
    </div>)
}


export default Missions;