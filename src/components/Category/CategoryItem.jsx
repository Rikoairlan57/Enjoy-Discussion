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
      className={`border border-yellow-500 text-yellow-600  rounded-xl px-3 ${
        category === category
          ? "bg-yellow-500 text-white"
          : "hover:bg-yellow-400/25"
      }`}
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
