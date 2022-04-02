import "./App.css";
import HomePage from "./pages/HomePage";
import WritePage from "./pages/WritePage";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import MyPage from "./pages/MyPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ask" element={<WritePage />} />
        <Route path="/questions" element={<PostListPage />} />
        <Route path="/questions/:questionId" element={<PostPage />} />
        <Route path="/info" element={<MyPage />} />
      </Routes>
    </>
  );
}

export default App;
