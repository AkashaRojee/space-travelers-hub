import { useSelector } from 'react-redux';
import styles from './Profile.module.scss';
import ProfileColumn from './ProfileColumn';

const Profiles = () => {

  const rockets = useSelector((state) => state.rockets);

  return (
    <div className={styles.profiles}>
      <ProfileColumn
        columnTitle='My Rockets'
        reservedItems = {rockets.filter((rocket) => rocket.reserved === true)}
      />
      <ProfileColumn
        columnTitle='My Dragons'
        reservedItems = {rockets.filter((rocket) => rocket.reserved === true)}
      />
      <ProfileColumn
        columnTitle='My Missions'
        reservedItems = {rockets.filter((rocket) => rocket.reserved === true)}
      />
    </div>
  );

};


export default Profiles;