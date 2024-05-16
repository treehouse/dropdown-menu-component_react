import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Menu from "./Menu";

const DropdownMenu = ({
  selectedItem,
  setSelectedItem,
  activeMenu,
  setActiveMenu,
  options,
}) => {
  return (
    <div
      className={`${
        activeMenu
          ? "rounded-tr-md rounded-tl-md rounded-br-0 rounded-bl-0"
          : "rounded-md"
      } bg-zinc-200 p-1 flex justify-between items-center h-[50px] relative`}
    >
      {selectedItem !== null ? (
        <p className="px-5 font-bold text-zinc-600">{selectedItem}</p>
      ) : (
        <p className="px-5 opacity-50">Select a Taco</p>
      )}
      <div
        onClick={() => {
          setActiveMenu(!activeMenu);
        }}
        className="min-w-[50px] h-full bg-blue-400 grid place-items-center rounded-md text-white text-2xl cursor-pointer hover:bg-blue-500 duration-200"
      >
        <MdOutlineKeyboardArrowDown />
      </div>

      {activeMenu && (
        <Menu
          setSelectedItem={setSelectedItem}
          options={options}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
      )}
    </div>
  );
};
export default DropdownMenu;
