import { Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import ExamPage from '../pages/ExamPage';
import ResultPage from '../pages/ResultPage';
import ProtectedRoute from './ProtectedRoute';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/exam/:subject" element={<ExamPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Route>
      </Route>
    </Routes>
  );
}