import React from "react";
import PropTypes from "prop-types";
import ThreadCategoryItem from "./CategoryItem";

function CategoryList({ categories, onCategoryHandler }) {
  return (
    <div>
      <h2>Popular Category</h2>
      {categories.map((category) => (
        <ThreadCategoryItem
          key={category}
          category={category}
          onCategoryHandler={onCategoryHandler}
        />
      ))}
    </div>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCategoryHandler: PropTypes.func.isRequired,
};

export default CategoryList;
