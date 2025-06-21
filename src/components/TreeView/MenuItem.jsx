import { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren((prev) => ({
      ...prev,
      [getCurrentLabel]: !prev[getCurrentLabel],
    }));
  }

  return (
    <li>
      <div onClick={() => handleToggleChildren(item.label)} className="menu-item flex items-center bg-gray-700 justify-between  p-2 rounded cursor-pointer">
        <p className="flex-1">{item.label}</p>
        {item.children?.length > 0 && (
          <span>
            {displayCurrentChildren[item.label] ? (
              <FaMinus size={16} />
            ) : (
              <FaPlus size={16} />
            )}
          </span>
        )}
      </div>

      {item.children?.length > 0 && displayCurrentChildren[item.label] && (
        <MenuList list={item.children} />
      )}
    </li>
  );
}
