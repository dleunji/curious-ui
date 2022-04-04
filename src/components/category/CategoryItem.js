import styled from 'styled-components';

const CategoryItemBlock = styled.div`
  width: 20rem;
  border: 1px solid rgb(239, 239, 239);
  .header {
    background-color: rgb(239, 239, 239);
    height: 4rem;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  .category-item {
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    padding: 5px 0px;
    &.selected {
      color: #f27983;
      font-weight: bold;
    }
  }
`;

const CategoryItem = ({ type, selection, categories, onChangeCategory }) => {
  return (
    <CategoryItemBlock>
      <div className="header">대분류</div>
      {categories?.map((category, idx) => (
        <div
          key={idx}
          className={`category-item ${
            selection === category.categoryId ? 'selected' : ''
          }`}
          onClick={() => onChangeCategory({ type, idx: category.categoryId })}
        >
          {category.categoryName}
        </div>
      ))}
    </CategoryItemBlock>
  );
};

export default CategoryItem;
