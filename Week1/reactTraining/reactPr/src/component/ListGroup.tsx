import { useState } from "react";

function Listgroup() {
  const items = [
    "India",
    "Singapore",
    "Malaysia",
    "States",
    "United Kingdom",
    "Germany",
  ];
  const [selectedIndex, SetselectedIndex] = useState(-1);

  return (
    <>
      <h1>Lists</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              SetselectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default Listgroup;
