import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

/* Auth Pages */
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";

/* Admin Pages */
import Dashboard from "./pages/Admin/Dashboard";
import ManageTasks from "./pages/Admin/ManageTasks";
import CreateTask from "./pages/Admin/CreateTask";
import ManageUsers from "./pages/Admin/ManageUsers";

/* Routes / Guards */
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>

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
          <Route path="/user/dashboard" element={<Dashboard />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default App;
