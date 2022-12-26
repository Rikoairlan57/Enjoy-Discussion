import React from "react";
import PropTypes from "prop-types";

function CategoryItem({ category, onCategoryHandler }) {
  return (
    <button
      type="button"
      onClick={() => {
        onCategoryHandler(category);
      }}
    >
      #{category}
    </button>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  onCategoryHandler: PropTypes.func.isRequired,
};

export default CategoryItem;
