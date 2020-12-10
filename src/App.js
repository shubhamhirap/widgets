import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";

const items = [
  {
    title: "What is react?",
    content: "React is a frontend Javascript library",
  },
  {
    title: "Why use react?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "how do you use react?",
    content: "you use React by creating components",
  },
];

const options = [
  { label: "The Color Red", value: "red" },
  { label: "The Color Green", value: "green" },
  { label: "The Shade of Blue", value: "blue" },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}

      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggele Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          onSelectedChange={setSelected}
          selected={selected}
        />
      ) : null}
    </div>
  );
};

export default App;
