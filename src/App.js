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
import AddReviews from "./Pages/Dashbaord/AddReviews";
import MyProfile from "./Pages/Dashbaord/MyProfile";
import Users from "./Pages/Dashbaord/Users";
import RequireAdmin from "./Pages/Shared/RequireAdmin";
import AllOrders from "./Pages/Dashbaord/AllOrders";
import Payment from "./Pages/Payment/Payment";
import AddParts from "./Pages/Dashbaord/AddParts";
import AddReviewPage from "./Pages/Dashbaord/AddReviewPage";
import ManageParts from "./Pages/Dashbaord/ManageParts";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="payment/:orderId"
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        />

        <Route
          path="reviews/:partId"
          element={
            <RequireAuth>
              <AddReviewPage />
            </RequireAuth>
          }
        />

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
          <Route index element={<MyProfile />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="add-review" element={<AddReviews />} />

          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          />
          <Route
            path="all-orders"
            element={
              <RequireAdmin>
                <AllOrders />
              </RequireAdmin>
            }
          />
          <Route
            path="manage-parts"
            element={
              <RequireAdmin>
                <ManageParts />
              </RequireAdmin>
            }
          />
          <Route
            path="add-parts"
            element={
              <RequireAdmin>
                <AddParts />
              </RequireAdmin>
            }
          />
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
