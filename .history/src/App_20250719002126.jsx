import Header from './components/Header/header.jsx';
import SidebarCategories from "../components/SidebarCategories/SidebarCategories";
import Cart from "../components/Cart/Cart";
import FoodGrid from "../components/FoodGrid/FoodGrid";

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
