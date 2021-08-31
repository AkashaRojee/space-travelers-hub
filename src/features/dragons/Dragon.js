import { useDispatch } from 'react-redux';
import * as dragonActions from './store/dragonsSlice';

const Dragon = ({ data: dragonInfo }) => {
  const dispatch = useDispatch();
  const {
    name, type, isReserved, img,
  } = dragonInfo;
  return (
    <div className="card">
      <div className="container flex gap-2">
        <img src={img} alt="" className="card__img" />
        <div className="card__text flex portrait gap-1">
          <h4 className="card__heading no-stretch">
            {isReserved ? (
              <span className="label label--reserved txt-center">Reserved</span>
            ) : null}
            {name}
          </h4>
          <p>
            type:
            {type}
          </p>
          <button
            type="button"
            className={`btn no-stretch ${
              isReserved ? 'btn--reserved' : 'btn--un-reserved'
            }`}
          >
            {isReserved ? 'Cancel Reservation' : 'Reserve Dragon'}
          </button>
        </div>
      </div>
      <button
        type="button"
        onClick={() => dispatch(dragonActions.loadDragons())}
      >
        STORE
      </button>
    </div>
  );
};

export default Dragon;
