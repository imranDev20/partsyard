import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header";
import Footer from "./Pages/Shared/Footer";
import Blog from "./Pages/Blog/Blog";
import RequireAuth from "./Pages/Shared/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import NotFound from "./Pages/NotFound.js/404";
import Dashboard from "./Pages/Dashbaord/Dashboard";
import MyOrders from "./Pages/Dashbaord/MyOrders";
import AddReview from "./Pages/Dashbaord/AddReview";
import MyProfile from "./Pages/Dashbaord/MyProfile";
import Users from "./Pages/Dashbaord/Users";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="purchase/:partId"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders />} />
          <Route path="add-review" element={<AddReview />} />
          <Route path="my-profile" element={<MyProfile />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="blog" element={<Blog />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
