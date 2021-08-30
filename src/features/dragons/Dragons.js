import "./Dragons.css";
const Dragons = () => {
  return (
    <div class="container">
      <div class="card">
        <div class="container flex gap-2">
          <img src="./img/9fWdwNv.jpg" alt="" class="card__img" />
          <div class="card__text flex portrait gap-1">
            <h4 class="card__heading">Falcon 1</h4>
            <p>"type": "capsule"</p>
            <button class="btn btn--un-reserved no-stretch">
              Reserve Dragon
            </button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="container flex gap-2">
          <img src="./img/9fWdwNv.jpg" alt="" class="card__img" />
          <div class="card__text flex portrait gap-1">
            <h4 class="card__heading no-stretch">
              <span class="label label--reserved txt-center">Reserved</span>
              Falcon 2{" "}
            </h4>
            <p>"type": "capsule"</p>
            <button class="btn btn--reserved ">Cancel Reservation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dragons;
