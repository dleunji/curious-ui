import styled from "styled-components";
import Responsive from "../common/Responsive";
import CategoryItem from "./CategoryItem";
const CategoryBlock = styled(Responsive)`
  display: flex;
  justify-content: space-between;
`;

const Category = ({ categories, selection, onChangeCategory }) => {
  // 대,중,소분류
  const largeCategories = categories?.$values;
  const middleCategories =
    categories?.$values[selection.large]?.inverseParentCategory.$values;
  const smallCategories =
    categories?.$values[selection.large]?.inverseParentCategory.$values[
      selection.middle
    ]?.inverseParentCategory.$values;

  return (
    <CategoryBlock>
      <CategoryItem
        type="large"
        selection={selection.large}
        categories={largeCategories}
        onChangeCategory={onChangeCategory}
      ></CategoryItem>
      <CategoryItem
        type="middle"
        selection={selection.middle}
        categories={middleCategories}
        onChangeCategory={onChangeCategory}
      ></CategoryItem>
      <CategoryItem
        type="small"
        selection={selection.small}
        categories={smallCategories}
        onChangeCategory={onChangeCategory}
      ></CategoryItem>
    </CategoryBlock>
  );
};

export default Category;
