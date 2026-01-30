import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

/* Auth Pages */
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";

/* Admin Pages */
import Dashboard from "./pages/Admin/Dashboard";
import ManageTasks from "./pages/Admin/ManageTasks";
import CreateTask from "./pages/Admin/CreateTask";
import ManageUsers from "./pages/Admin/ManageUsers";

/* User Pages */
import UserDashboard from "./pages/User/UserDashboard";
import MyTask from "./pages/User/MyTask";
import ViewTaskDetails from "./pages/User/ViewTaskDetails";

/* Routes / Guards */
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  return (
    <Router basename="/SaaS-system-Adminpanel">
      <Routes>

        {/* Root */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Admin Routes */}
        <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/tasks" element={<ManageTasks />} />
          <Route path="/admin/createtasks" element={<CreateTask />} />
          <Route path="/admin/users" element={<ManageUsers />} />
        </Route>

        {/* User Routes */}
        <Route element={<PrivateRoute allowedRoles={["user"]} />}>
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/tasks" element={<MyTask />} />
          <Route path="/user/tasks-details/:id" element={<ViewTaskDetails />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<h1>404 – Sidan finns inte</h1>} />

      </Routes>
    </Router>
  );
};

export default App;
