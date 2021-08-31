import React from 'react';

const TableBody = ({ missions }) => {
  return (
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
  );
};

export default TableBody;