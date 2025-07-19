import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import EmptyLayout from '../layouts/EmptyLayout';

import LoginPage from '../pages/Login/LoginPage';
import MenuPage from '../pages/Menu/MenuPage';
import ReceiptsPage from '../pages/Receipts/ReceiptsPage';
import ShiftPage from '../pages/Shift/ShiftHistory';
import RefundPage from '../pages/Refund/RefundPage';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public */}
      <Route element={<EmptyLayout />}>
        <Route path="/" element={<LoginPage />} />
      </Route>

      {/* Protected */}
      <Route element={<MainLayout />}>
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/receipts" element={<ReceiptsPage />} />
        <Route path="/shift" element={<ShiftPage />} />
        <Route path="/refund" element={<RefundPage />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
