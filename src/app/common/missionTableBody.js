import React from 'react';
import propTypes from 'prop-types';

const TableBody = ({ missions, onJoinMission }) => (
  <tbody>
    {
      missions.map(({
        mission_id: id, mission_name: name, description, joined,
      }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>
            {description}
          </td>
          <td>
            <span className={`${joined ? 'joined' : ''}`}>{!joined ? 'NOT A MEMBER' : 'Active Member' }</span>
          </td>
          <td>
            <button type="button" className={`${joined ? 'joined' : ''}`} onClick={() => onJoinMission(id, joined)}>{!joined ? 'Join Mission' : 'leave Mission' }</button>
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
