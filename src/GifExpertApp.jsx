import { useState } from "react";
import { AddCategory, GiftGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Puch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([ newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GiftGrid
          key={category}
          category={category} />
      ))}
    </>
  );
};
