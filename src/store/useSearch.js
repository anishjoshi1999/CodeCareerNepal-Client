import { useEffect, useRef, useState } from "react";

/**
 * @template T
 * @function
 * @param {T[]} searchList
 * @param {(keyof T|undefined)[]} searchKeys
 */
export function useSearch(searchList, ...searchKeys) {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef();
  const searchTokens = searchTerm
    .split(/[\s,.-]+/)
    .filter((d) => d.length > 1)
    .map((token) => token.toLowerCase());
  const filteredList = searchList.filter((listing) => {
    if (!searchTokens.length) return true;
    let listItem;
    if (typeof listing === "string") {
      listItem = listing;
      return searchTokens.every((token) =>
        listItem.toLowerCase().includes(token.toLowerCase())
      );
    }
    /** @type {boolean[]} */
    const searchVal = searchTokens.every((token) =>
      searchKeys.map((key) =>
        listing[key].toLowerCase().includes(token.toLowerCase())
      ).some(i => i)
    );
    return searchVal
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
}
