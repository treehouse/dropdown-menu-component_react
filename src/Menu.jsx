const Menu = ({ options, activeMenu, setActiveMenu, setSelectedItem }) => {
  return (
    <div
      className={`${
        activeMenu
          ? "rounded-tr-0 rounded-tl-0 rounded-br-md rounded-bl-md"
          : "rounded-md"
      } bg-zinc-200 absolute w-full left-0 top-full p-3 slidein`}
    >
      {options.map((option, index) => {
        return (
          <li
            onClick={() => {
              setSelectedItem(option);
              setActiveMenu(false);
            }}
            className="cursor-pointer hover:bg-zinc-300 list-none py-3 px-5 rounded-md"
            key={index}
          >
            {option}
          </li>
        );
      })}
    </div>
  );
};
export default Menu;
