import { Navigate, Route, Routes } from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";
import UsersPage from "../pages/UsersPage";
import ChartPage from "../pages/ChartPage";
import FormPage from "../pages/FormPage";

function Router() {
  return (
    <Routes>
      <Route index element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/chart" element={<ChartPage />} />
      <Route path="/*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}

export default Router;
