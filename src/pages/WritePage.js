import EditorContainer from "../containers/write/EditorContainer";
import Responsive from "../components/common/Responsive";
import Header from "../components/common/Header";
import WriteActionButtonsContainer from "../containers/write/WriteActionButtonsContainer";
const WritePage = () => {
  return (
    <>
      <Header />
      {/* TODO: 카테고리 고르기 */}
      <Responsive>
        <EditorContainer />
        <WriteActionButtonsContainer />
      </Responsive>
    </>
  );
};

export default WritePage;
