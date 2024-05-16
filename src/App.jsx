import { useRef, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import Menu from "./Menu";
const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeMenu, setActiveMenu] = useState(false);
  const options = useRef([
    "Carne Asada Tacos",
    "Fish Tacos",
    "Al Pastor Tacos",
    "Vegetarian Tacos",
    "Barbacoa Tacos",
  ]);
  return (
    <div className="h-screen bg-blue-400 grid place-items-center">
      <div className="w-[80%] bg-white p-10 rounded-md">
        <DropdownMenu
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          options={options.current}
        />
      </div>
    </div>
  );
};
export default App;
