import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableHeader from '../../app/common/missinTableHeader';
import TableBody from '../../app/common/missionTableBody';
import { getMissions, joinMission, leaveMission } from './missionsSlice';
import './mission.scss';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state).missions;
  const handleMission = (id, joined) => {
    dispatch(joined ? leaveMission(id) : joinMission(id));
  };
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
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
