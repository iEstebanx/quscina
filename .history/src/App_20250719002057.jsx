import Header from './components/Header/header.jsx';

function App() {
  return (
    <div>
      <Header />
      <div className="menu-layout">
        <SidebarCategories />
        <FoodGrid />
        <Cart />
      </div>
    </div>
  );
}

export default App
