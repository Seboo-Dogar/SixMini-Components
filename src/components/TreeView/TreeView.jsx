import MenuList from "./MenuList";

export default function TreeView({ menus = [] }) {
  return (
    <div className="p-4 bg-gray-800 min-h-screen text-white">
        <div className="w-sm bg-gray-700 p-10">
            <MenuList list={menus} />
        </div>
    </div>
  );
}
