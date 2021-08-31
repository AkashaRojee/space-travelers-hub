/* eslint-disable react/no-typos */
import React from 'react';
import PropTypes from 'prop-types';

const TableBody = ({ missions, onJoinMission }) => {
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
          <button className={`${ mission.joined ? 'joined' : ''}`} onClick={() => onJoinMission(mission.mission_id, mission.joined )}>{!mission.joined ? 'Join Mission' : 'leave Mission' }</button>
        </td>
      </tr>
      ))
    }
  </tbody>
  );
};
TableBody.PropTypes = {
  mission: PropTypes.arrayOf(PropTypes.string).isRequired,
  onJoinMission: PropTypes.func.isRequired,
}
export default TableBody;