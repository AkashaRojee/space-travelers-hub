import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from './missionsSlice';
const Missions = () => {
  const dispatch =  useDispatch();
  const { missions } =  useSelector((state) => state);
  console.log(missions.missions);
  useEffect(() => {
    dispatch(getMissions())
  }, [dispatch]);
  return (<p>missions</p>)
}


export default Missions;