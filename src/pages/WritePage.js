import EditorContainer from '../containers/write/EditorContainer';
import Responsive from '../components/common/Responsive';
import HeaderContainer from '../containers/common/HeaderContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';
import CategoryContainer from '../containers/category/CategoryContainer';
const WritePage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <CategoryContainer />
        <EditorContainer />
        <WriteActionButtonsContainer />
      </Responsive>
    </>
  );
};

export default WritePage;
