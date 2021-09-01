import { useSelector } from 'react-redux';

const Profiles = () => {
  const { missions } = useSelector((state) => state).missions;
  const joinedMission = missions.filter((mission) => mission.joined === true);
  return (
    <div>
      {
      joinedMission.map((mission) => (
        <p key={mission.mission_id}>{mission.mission_name}</p>
      ))
    }
    </div>
  );
};

export default Profiles;
