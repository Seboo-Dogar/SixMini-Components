import MenuItem from "./MenuItem";

export default function MenuList({ list = [] }) {
  return (
    <ul className="pl-10 space-y-2">
      {list && list.length
        ? list.map((listItem, index) => (
            <MenuItem key={index} item={listItem} />
          ))
        : null}
    </ul>
  );
}
