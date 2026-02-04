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

/* Guards */
import PrivateRoute from "./routes/PrivateRoute";

/* Root redirect */
const RootRedirect = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role === "admin") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  if (user.role === "user") {
    return <Navigate to="/user/dashboard" replace />;
  }

  return <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <Router basename="/SaaS-system-Adminpanel">
      <Routes>

        {/* App entry */}
        <Route path="/" element={<RootRedirect />} />

        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Admin */}
        <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/tasks" element={<ManageTasks />} />
          <Route path="/admin/createtasks" element={<CreateTask />} />
          <Route path="/admin/users" element={<ManageUsers />} />
        </Route>

        {/* User */}
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
