import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import EmptyLayout from '../layouts/EmptyLayout';

import LoginPage from '../pages/Login/LoginPage';
import RequireShift from '../components/guards/RequireShift';
import MenuPage from '../pages/Menu/MenuPage';
import ReceiptsPage from '../pages/Receipts/ReceiptsPage';
import ShiftPage from '../pages/Shift/ShiftPage';
import ShiftHistoryPage from '../pages/Shift/ShiftHistoryPage'; // ✅ Add this line
import RefundPage from '../pages/Refund/RefundPage';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public */}
      <Route element={<EmptyLayout />}>
        <Route path="/" element={<LoginPage />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/shift" element={<ShiftPage />} />
        <Route path="/shift/history" element={<ShiftHistoryPage />} />
        
        {/* Only allow access to MenuPage if shift is open */}
        <Route
          path="/menu"
          element={
            <RequireShift>
              <MenuPage />
            </RequireShift>
          }
        />

        <Route path="/receipts" element={<ReceiptsPage />} />
        <Route path="/refund" element={<RefundPage />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
