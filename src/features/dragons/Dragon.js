import CardBtn from './CardBtn';

const Dragon = ({ data: dragonInfo }) => {
  const { id, name, type, isReserved, imgSrc } = dragonInfo;

  return (
    <div className="card">
      <div className="container flex gap-2">
        <img src={imgSrc} alt="" className="card__img" />
        <div className="card__text flex portrait gap-1">
          <h4 className="card__heading no-stretch">
            {isReserved && (
              <span className="label label--reserved txt-center">Reserved</span>
            )}
            {name}
          </h4>
          <p>
            type:
            {type}
          </p>
          <CardBtn status={isReserved} cardId={id} />
        </div>
      </div>
    </div>
  );
};

export default Dragon;
