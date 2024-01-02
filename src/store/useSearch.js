import { useEffect, useRef, useState } from "react";

export const useSearch = function (searchList, searchKey) {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef();
  const filteredList = searchList.filter((listing) => {
    let listItem;
    if (typeof listing === "string") listItem = listing;
    else listItem = listing[searchKey];
    return listItem.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const inputChangeEvent = (e) => {
    console.log("Event triggred", e);
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };
  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.addEventListener("input", inputChangeEvent);
    return () => {
      if (inputRef.current)
        inputRef.current.removeEventListener("input", inputChangeEvent);
    };
  }, []);
  return { inputRef, filteredList };
};
