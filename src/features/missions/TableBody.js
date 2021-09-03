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
            <span title="badge" className={`${joined ? 'joined' : ''}`}>{!joined ? 'NOT A MEMBER' : 'Active Member' }</span>
          </td>
          <td>
            <button type="button" className={`${joined ? 'joined' : ''}`} onClick={() => onJoinMission(id, joined)}>{!joined ? 'Join Mission' : 'Leave Mission' }</button>
          </td>
        </tr>
      ))
    }
  </tbody>
);

TableBody.propTypes = {
  missions: propTypes.arrayOf(propTypes.any).isRequired,
  onJoinMission: propTypes.func.isRequired,
};

export default TableBody;
