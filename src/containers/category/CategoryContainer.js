import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "../../components/category/Category";
import { initializeCategory, changeCategory } from "../../modules/category";

const CategoryContainer = () => {
  const dispatch = useDispatch();
  const { categories, selection } = useSelector(({ category }) => ({
    categories: category.categories,
    selection: category.selection,
  }));

  const onChangeCategory = ({ type, idx }) => {
    dispatch(changeCategory({ type, idx }));
  };
  useEffect(() => {
    dispatch(initializeCategory());
  }, [dispatch]);
  return (
    <Category
      categories={categories}
      selection={selection}
      onChangeCategory={onChangeCategory}
    />
  );
};

export default CategoryContainer;
