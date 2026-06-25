import "./CategoryCard.css"
const CategoryCard = ({
  category,
  image,
  backgroundColor,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`category-card ${isSelected ? "selected" : ""}`}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      <h3>{category}</h3>
      <img src={image} alt={category} className="category-image" />
    </div>
  )
}

export default CategoryCard
