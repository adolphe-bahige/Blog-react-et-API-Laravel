import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Categories from "./pages/categories/categories";
import Posts from "./pages/posts/Posts";
import Comments from "./pages/Comments";
import Users from "./pages/Users";
import Settings from "./pages/settings/settings";
import CreateCategoryForm from "./pages/categories/createCategory";
import EditCategoryForm from "./pages/categories/EditCategory";
import CreatePostForm from "./pages/posts/CreatePost";
import EditPostForm from "./pages/posts/EditPost";
import Login from "./pages/auth/Login";
import { ThemeProvider } from "./context/ThemeContext";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/categories">
              <Route index element={<Categories />} />
              <Route path="create" element={<CreateCategoryForm />} />
              <Route path=":id/edit" element={<EditCategoryForm />} />
            </Route>

            <Route path="/posts">
              <Route index element={<Posts />} />
              <Route path="create" element={<CreatePostForm />} />
              <Route path="edit" element={<EditPostForm />} />
              {/* <Route path=":id/edit" element={<EditPostForm />} /> */}
            </Route>

            <Route path="/comments" element={<Comments />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Route>

          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/logout" element={<Register />} /> */}
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
