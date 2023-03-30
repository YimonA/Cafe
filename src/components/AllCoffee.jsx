import React, { useState } from "react";
import { useContextCustom } from "../context/stateContext";
import Card from "./Card";

const AllCoffee = () => {
  const { coffeeList } = useContextCustom();
  const [ingredients, setIngredients] = useState([
    "Coffee",
    "Espresso",
    "Steamed Milk",
    "Foam",
    "Hot Water",
    "1oz Espresso",
    "2oz Espresso",
    "1oz Steamed Milk",
    "Foamed milk",
    "Long pulled espresso",
  ]);

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-4xl font-bold mt-8">All Coffee We Provide</h2>
      <div className="container mx-auto flex max-w-4xl gap-4 flex-wrap justify-center py-6">
        {ingredients?.map((ingre) => {
          return (
            <button className=" px-2 py-2 bg-green-200 text-green-600 rounded-full my-1 font-semibold shadow-sm hover:shadow">
              {ingre}
            </button>
          );
        })}
      </div>
      <div className=" container mx-auto flex flex-wrap gap-8 justify-center mt-8">
        {coffeeList?.map((coffee) => {
          return <Card key={coffee.id} {...coffee}></Card>;
        })}
      </div>
    </div>
  );
};
export default AllCoffee;
