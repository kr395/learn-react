import "./App.css";
import List from "./List.jsx";

export default function NewApp() {
  const fruits = [
    { id: 1, name: "apples", pricePerKg: 50 },
    { id: 2, name: "oranges", pricePerKg: 40 },
    { id: 3, name: "pears", pricePerKg: 20 },
    { id: 4, name: "grapes", pricePerKg: 30 },
  ];
  const vegitabals = [
    { id: 5, name: "onion", pricePerKg: 30 },
    { id: 6, name: "cabage", pricePerKg: 50 },
    { id: 7, name: "bringal", pricePerKg: 40 },
    { id: 8, name: "potato", pricePerKg: 80 },
  ];

  return (
    <>
      {fruits.length > 0 && <List listItem={fruits} catagory="Fruits" />}
      {vegitabals.length > 0 && (
        <List listItem={vegitabals} catagory="Vegitabals" />
      )}
    </>
  );
}
