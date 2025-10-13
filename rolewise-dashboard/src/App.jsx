import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import SignUp from "./pages/Auth/SignUp.jsx";
import Login from "./pages/Auth/Login.jsx";
import Home from "./pages/Home.jsx";
import UserDashboard from "./pages/User/UserDashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ForgotPassword from "./pages/Auth/ForgotPassword.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import AdminUsers from "./pages/Admin/AdminUsers.jsx";
import AdminProperties from "./pages/Admin/AdminProperties.jsx";
import AdminAnalytics from "./pages/Admin/AdminAnalytics.jsx";
import AdminProfile from "./pages/Admin/AdminProfile.jsx";
import AdminLayout from "./layouts/AdminLayout";
import SellProperty from "./pages/User/SellProperty.jsx";




export default function App() {
  const location = useLocation();

  // Routes where Navbar should NOT appear
  const hideNavbarRoutes = [
    "/admin/dashboard",
    "/admin/users",
    "/admin/properties",
    "/admin/analytics",
    "/admin/profile",
    "/user/dashboard"
  ];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Admin Routes */}
<Route
  path="/admin"
  element={
    <ProtectedRoute role="admin">
      <AdminLayout />
    </ProtectedRoute>
  }
>
  <Route path="dashboard" element={<AdminDashboard />} />
  <Route path="users" element={<AdminUsers />} />
  <Route path="properties" element={<AdminProperties />} />
  <Route path="analytics" element={<AdminAnalytics />} />
  <Route path="profile" element={<AdminProfile />} />
</Route>


        <Route
          path="/admin/users"
          element={
            <ProtectedRoute role="admin">
              <AdminUsers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/properties"
          element={
            <ProtectedRoute role="admin">
              <AdminProperties />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/analytics"
          element={
            <ProtectedRoute role="admin">
              <AdminAnalytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/profile"
          element={
            <ProtectedRoute role="admin">
              <AdminProfile />
            </ProtectedRoute>
          }
        />

        {/* User Route */}
        <Route
          path="/user/dashboard"
          element={
            <ProtectedRoute role="user">
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
  path="/user/sell-property"
  element={
    <ProtectedRoute role="user">
      <SellProperty />
    </ProtectedRoute>
  }
/>

      </Routes>
      
    </>
  );
}
