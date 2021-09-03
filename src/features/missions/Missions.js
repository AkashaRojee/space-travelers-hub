import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { getMissions, joinMission, leaveMission } from './missionsSlice';
import './mission.scss';

const Missions = () => {
  const { missions } = useSelector((state) => state).missions;

  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) dispatch(getMissions());
  }, []);

  const handleMission = (id, joined) => {
    dispatch(joined ? leaveMission(id) : joinMission(id));
  };

  return (
    <section className="missions-section">
      <table className="mission-table">
        <TableHeader />
        <TableBody onJoinMission={handleMission} missions={missions} />
      </table>
    </section>
  );
};

export default Missions;
