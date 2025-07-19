// src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This renders MenuPage, ReceiptsPage, etc. */}
      </main>
    </>
  );
};

export default MainLayout;
