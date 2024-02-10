import { useEffect, useState, useRef } from "react";
import { fetchAllCategories } from "../api";

function ProductFilter({
  selectedCategory,
  onSetSelectedCategory,
  getProductsByCategory,
}) {
  const [categories, setCategories] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const getCategories = async () => {
      const result = await fetchAllCategories();
      setCategories(result);
    };
    getCategories();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Close the dropdown if clicked outside of it
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsInputFocused(false);
        setInputValue("");
      }
    };

    // Add event listener to handle clicks outside of the dropdown
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const clearFilter = () => {
    setInputValue("");
    getProductsByCategory();
  };

  const renderCategories = (query) => {
    console.log(query);
    setIsCategoryFocus(true);
    setInputValue(query);
    query = query.toLowerCase();
    const results = categories.filter((item) => item.includes(query));
    const uniqValues = [...new Set(results)];
    setList(uniqValues);
    onSetSelectedCategory();
  };

  const handleKeyDown = (e) => {
    console.log(selectedIndex);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      scrollList(selectedIndex);
      setSelectedIndex((prevIndex) =>
        prevIndex < list.length - 1 ? prevIndex + 1 : list.length - 1
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      scrollList(selectedIndex);
      setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    } else if (e.key === "Enter") {
      handleSelectCategory(list[selectedIndex]);
    }
  };

  const handleSelectCategory = (item) => {
    console.log(item);
    setInputValue(item);
    console.log(inputValue);
    getProductsByCategory(item);
    setIsInputFocused(false);
  };
  const handleInputFocus = () => {
    setIsInputFocused(true);
    setList(categories);
  };

  const scrollList = (index) => {
    if (dropdownRef.current && dropdownRef.current.children[index]) {
      dropdownRef.current.children[index].scrollIntoView({
        behaviour: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="flex justify-start items-center w-[500px] relative border-gray-700 border-2 rounded-lg">
      <span className="w-[150px] bg-slate-500 p-4 rounded-lg">Filter By:</span>
      <input
        placeholder="Category"
        name="categoryfilter"
        className="italic bg-transparent text-lg
        text-white p-3 shadow-lg
        w-full outline-none"
        onKeyDown={handleKeyDown}
        onFocus={handleInputFocus}
        value={inputValue}
        onChange={(e) => renderCategories(e.target.value)}
      />
      {inputValue && (
        <button className="absolute right-4" onClick={clearFilter}>
          X
        </button>
      )}
      {isInputFocused && (
        <ul
          ref={dropdownRef}
          className={`absolute overflow-y-auto bg-slate-600 min-h-[150px] h-5 z-10 w-full top-16 rounded-lg`}
        >
          {list.length > 0 ? (
            list.map((item, index) => (
              <li
                key={index}
                className={`capitalize border-b-2  ${
                  index === selectedIndex ? "bg-slate-400" : "bg-slate-600"
                } border-gray-400 text-white p-3 italic`}
                onClick={() => handleSelectCategory(item, index)}
              >
                {item}
              </li>
            ))
          ) : (
            <li className="text-center bg-slate-600 text-gray-400">
              No Categories Found!
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default ProductFilter;
