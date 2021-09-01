import { useSelector } from 'react-redux';
import styles from './Profile.module.scss';
import ProfileColumn from './ProfileColumn';

const Profiles = () => {
  const rockets = useSelector((state) => state.rockets);
  const { list: dragonsList } = useSelector((state) => state.dragons);

  return (
    <div className={styles.profiles}>
      <ProfileColumn
        columnTitle="My Rockets"
        reservedItems={rockets.filter((rocket) => rocket.reserved === true)}
      />
      <ProfileColumn
        columnTitle="My Dragons"
        reservedItems={dragonsList.filter((dragon) => dragon.isReserved === true)}
      />
      <ProfileColumn
        columnTitle="My Missions"
        reservedItems={rockets.filter((rocket) => rocket.reserved === true)}
      />
    </div>
  );
};

export default Profiles;
