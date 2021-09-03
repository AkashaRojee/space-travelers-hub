import { useSelector } from 'react-redux';
import ProfileColumn from './ProfileColumn';

const Profiles = () => {
  const rockets = useSelector((state) => state.rockets);
  const dragons = useSelector((state) => state.dragons);
  const { missions } = useSelector((state) => state).missions;

  const filteredMissions = missions
    .filter((mission) => (mission.joined === true))
    .map((mission) => ({ title: mission.mission_name }));

  return (
    <div className="profiles">
      <ProfileColumn
        columnTitle="My Rockets"
        reservedItems={rockets.filter((rocket) => rocket.reserved === true)}
      />
      <ProfileColumn
        columnTitle="My Dragons"
        reservedItems={dragons.filter((dragon) => dragon.reserved === true)}
      />
      <ProfileColumn
        columnTitle="My Missions"
        reservedItems={filteredMissions}
      />
    </div>
  );
};

export default Profiles;
