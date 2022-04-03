import EditorContainer from "../containers/write/EditorContainer";
import Responsive from "../components/common/Responsive";
import HeaderContainer from "../containers/common/HeaderContainer";
import WriteActionButtonsContainer from "../containers/write/WriteActionButtonsContainer";
const WritePage = () => {
  return (
    <>
      <HeaderContainer />
      {/* TODO: 카테고리 고르기 */}
      <Responsive>
        <EditorContainer />
        <WriteActionButtonsContainer />
      </Responsive>
    </>
  );
};

export default WritePage;
