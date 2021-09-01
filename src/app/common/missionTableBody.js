import React from 'react';
import propTypes from 'prop-types';

const TableBody = ({ missions, onJoinMission }) => (
  <tbody>
    {
      missions.map((mission) => (
        <tr key={mission.mission_id}>
          <td>{mission.mission_name}</td>
          <td>
            {mission.description}
          </td>
          <td>
            <span className={`${mission.joined ? 'joined' : ''}`}>{!mission.joined ? 'NOT A MEMBER' : 'Active Member' }</span>
          </td>
          <td>
            <button type="button" className={`${mission.joined ? 'joined' : ''}`} onClick={() => onJoinMission(mission.mission_id, mission.joined)}>{!mission.joined ? 'Join Mission' : 'leave Mission' }</button>
          </td>
        </tr>
      ))
    }
  </tbody>
);

TableBody.propTypes = {
  missions: propTypes.arrayOf(propTypes.string).isRequired,
  onJoinMission: propTypes.func.isRequired,
};
export default TableBody;
