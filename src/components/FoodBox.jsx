const FoodBox = ({ food, onDelete }) => {
  const { name, calories, image, servings } = food;
  const totalCalories = servings * calories;

  return (
    <div
      style={{
        marginBottom: "20px",
        borderBottom: "1px solid black",
        paddingBottom: "10px",
      }}
    >
      <p style={{ textTransform: "uppercase", fontWeight: "bold" }}>{name}</p>
      <img
        src={image}
        alt={name}
        style={{ width: "100%", maxWidth: "200px", height: "auto" }}
      />
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>
        <b>Total Calories: {totalCalories} kcal</b>
      </p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default FoodBox;
