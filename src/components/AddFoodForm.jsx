import { useState } from 'react';

const AddFoodForm = ({ onAddFood }) => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFood(formData);
    setFormData({
      name: '',
      image: '',
      calories: '',
      servings: '',
    });
  };

  return (
    <div>
      <h2 style={{ fontWeight: 'bold' }}>Add Food Entry</h2>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center', fontWeight: 'bold' }}>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        <br />

        <label htmlFor="image">Image</label>
        <br />
        <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} />
        <br />

        <label htmlFor="calories">Calories</label>
        <br />
        <input type="number" id="calories" name="calories" value={formData.calories} onChange={handleChange} />
        <br />

        <label htmlFor="servings">Servings</label>
        <br />
        <input type="number" id="servings" name="servings" value={formData.servings} onChange={handleChange} />
        <br />

        <button type="submit" style={{ marginTop: '10px' }}>Create</button>
      </form>
    </div>
  );
};

export default AddFoodForm;

