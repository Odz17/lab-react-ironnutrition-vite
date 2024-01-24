
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import foodsJson from './foods.json';

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const removeFoodItem = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };

  const addFoodItem = (newFood) => {
    const newFoodWithId = { ...newFood, id: Date.now() };
    setFoods([...foods, newFoodWithId]);
  };

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <AddFoodForm onAddFood={addFoodItem} />
      {foods.map((food) => (
        <FoodBox key={food.id} food={food} onDelete={() => removeFoodItem(food.id)} />
      ))}
    </div>
  );
}

export default App;
