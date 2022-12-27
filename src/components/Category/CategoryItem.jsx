/* eslint-disable no-self-compare */
import React from "react";
import PropTypes from "prop-types";

function CategoryItem({ category, onCategoryHandler }) {
  return (
    <button
      key={category}
      type="button"
      onClick={() => {
        onCategoryHandler(category);
      }}
      className="px-2 py-1 my-5 mx-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md"
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
