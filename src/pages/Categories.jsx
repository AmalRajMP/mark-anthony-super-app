import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useStore } from "../store/useStore"

import CategoryCard from "../components/CategoryCard"

import categories from "../constants/categories"
import categoryImages from "../constants/categoryImages"
import categoryColors from "../constants/categoryColors"

import "./Categories.css"

const Categories = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [showError, setShowError] = useState(false)

  const navigate = useNavigate()

  const setCategories = useStore((state) => state.setCategories)

  useEffect(() => {
    if (selectedCategories.length >= 3) {
      setShowError(false)
    }
  }, [selectedCategories])

  const handleCategoryClick = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((item) => item !== category),
      )
    } else {
      setSelectedCategories((prevCategories) => [...prevCategories, category])
    }
  }

  const handleNextPage = () => {
    if (selectedCategories.length < 3) {
      setShowError(true)
      return
    }

    setCategories(selectedCategories)
    navigate("/dashboard")
  }

  return (
    <div className="categories-container">
      <div className="categories-left">
        <h1>Super app</h1>

        <h2>Choose your entertainment category</h2>

        <div className="selected-categories">
          {selectedCategories.map((category) => (
            <div key={category} className="category-chip">
              <span>{category}</span>

              <button
                type="button"
                className="remove-chip"
                onClick={() => handleCategoryClick(category)}
              >
                x
              </button>
            </div>
          ))}
        </div>
        {showError && (
          <p className="validation-error">⚠ Minimum 3 category required</p>
        )}
      </div>

      <div className="categories-right">
        <div className="categories-grid">
          {categories.map((category) => (
            <CategoryCard
              key={category}
              category={category}
              image={categoryImages[category]}
              backgroundColor={categoryColors[category]}
              isSelected={selectedCategories.includes(category)}
              onClick={() => handleCategoryClick(category)}
            />
          ))}
        </div>
        <button className="next-btn" onClick={handleNextPage}>
          Next Page
        </button>
      </div>
    </div>
  )
}

export default Categories
