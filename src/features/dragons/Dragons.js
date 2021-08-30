import "./Dragons.css";
const Dragons = () => {
  const isReserved = false;
  return (
    <div className="container">
      <div className="card">
        <div className="container flex gap-2">
          <img src="./img/9fWdwNv.jpg" alt="" className="card__img" />
          <div className="card__text flex portrait gap-1">
            <h4 className="card__heading no-stretch">
              {isReserved ? (
                <span className="label label--reserved txt-center">
                  Reserved
                </span>
              ) : null}
              Falcon 2
            </h4>
            <p>"type": "capsule"</p>
            <button
              className={`btn ${
                isReserved ? "btn--reserved" : "btn--un-reserved"
              }`}
            >
              Cancel Reservation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dragons;
