import Dragon from "./Dragon";
import "./Dragons.css";
const Dragons = () => {
  const dragonsList = [
    {
      id: 1,
      name: "Dragon 2",
      type: "capsule",
      flickr_images:
        "https://farm8.staticflickr.com/7647/16581815487_6d56cb32e1_b.jpg",
      isReserved: true,
    },
    {
      id: 2,
      name: "Dragon 7",
      type: "capsule",
      flickr_images:
        "https://farm8.staticflickr.com/7647/16581815487_6d56cb32e1_b.jpg",
      isReserved: false,
    },
  ];
  return (
    <div className="container">
      {dragonsList.map((dragon) => (
        <Dragon key={dragon.id} data={dragon} />
      ))}
    </div>
  );
};

export default Dragons;
