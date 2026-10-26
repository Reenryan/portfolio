
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "../dashboard/Dashboard";
import PortfolioLayout from "../layouts/PortfolioLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioLayout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
