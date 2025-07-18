import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';
import { ShiftProvider } from './context/ShiftContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ShiftProvider>
          <CartProvider>
            <AppRoutes />
          </CartProvider>
        </ShiftProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
