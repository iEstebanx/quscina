import SidebarCategories from "../components/SidebarCategories/SidebarCategories.jsx";

import Cart from "../components/Cart/Cart";
import FoodGrid from "../components/FoodGrid/FoodGrid";

function App() {
  return (

      <div className="menu-layout">
        <SidebarCategories />
        <FoodGrid />
        <Cart />
      </div>
  );
}

export default App
