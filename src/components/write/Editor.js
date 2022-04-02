import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
const EditorBlock = styled(Responsive)`
  padding-top: 5rem;
  padding-bottom: 3rem;
`;

const TitleInput = styled.input`
  font-size: 2.5rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid gray;
  margin-bottom: 2rem;
  width: 100%;
`;
const QuillWrapper = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 380px;
    font-size: 1.125rem;
    line-height: 1.5;
    padding: 0 10px;
  }

  .ql-editor.ql-blank::before {
    left: 10px;
    right: 10px;
  }
`;

const Editor = ({ onChangeField, title, body }) => {
  // Quill을 적용할 DivElement 설정
  const quillElement = useRef(null);
  // Quill 인스턴스를 설정
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "snow",
      placeholder: "내용을 작성하세요...",
      modules: {
        // 더 많은 옵션
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block", "link", "image"],
        ],
      },
    });

    const quill = quillInstance.current;
    quill.on("text-change", (delta, oldDelta, source) => {
      if (source === "user") {
        onChangeField({ key: "body", value: quill.root.innerHTML });
      }
    });
  }, [onChangeField]);

  const onChangeTitle = (e) => {
    onChangeField({ key: "title", value: e.target.value });
  };

  return (
    <EditorBlock>
      <TitleInput
        placeholder="질문 제목을 입력하세요"
        onChange={onChangeTitle}
        value={title}
      />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

export default Editor;
