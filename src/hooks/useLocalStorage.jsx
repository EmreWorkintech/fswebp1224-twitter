import { useState } from "react";

export function useLocalStorage(key, initialData) {
  const [data, setData] = useState(() => {
    const storedValue = localStorage.getItem(key); //string
    if (storedValue) {
      return JSON.parse(storedValue);
    } else {
      localStorage.setItem(key, JSON.stringify(initialData));
      return initialData;
    }
  });

  function updateData(newValue) {
    setData(newValue);
    localStorage.setItem(key, JSON.stringify(newValue)); //string yaparak kaydet!!!
  }

  return [data, updateData];
}
