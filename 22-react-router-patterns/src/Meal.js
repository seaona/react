import { useParams } from 'react-router-dom';

function Meal() {
  const { foodName, drinkName } = useParams();
  const url = `https://source.unsplash.com/1600x900/?`;
  return (
    <div className="Food">
        <h1>THIS IS A MEAL</h1>
        <h2>Food {foodName}</h2>
        <img src={`${url}${foodName}`} alt={foodName} />
        <h2>Drink {drinkName}</h2>
        <img src={`${url}${drinkName}`} alt={drinkName} />
    </div>
  );
}

export default Meal;