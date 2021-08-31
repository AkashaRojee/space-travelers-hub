import { useDispatch } from 'react-redux';
import * as dragonActions from './store/dragonsSlice';

const CardBtn = ({ status: isReserved, cardId: id }) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={
        isReserved
          ? () => dispatch(dragonActions.unReserveDragon(id))
          : () => dispatch(dragonActions.reserveDragon(id))
      }
      className={`btn no-stretch ${
        isReserved ? 'btn--reserved' : 'btn--un-reserved'
      }`}
    >
      {isReserved ? 'Cancel Reservation' : 'Reserve Dragon'}
    </button>
  );
};

export default CardBtn;
