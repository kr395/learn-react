// To learn Render List
import React from "react";
import PropTypes from "prop-types";

export default function List(props) {
  const catagory = props.catagory;
  const listItems = props.listItem;
  // listItems.sort((a, b) => {
  //   return a.name.localeCompare(b.name);
  // });
  // listItems.sort((a, b) => {
  //   return a.pricePerKg - b.pricePerKg;
  // });

  // const lessThan40 = listItems.filter((fruit) => fruit.pricePerKg <= 40);
  const listItemsList = listItems.map((fruit) => {
    return (
      <ol className="olist" key={fruit.id}>
        {fruit.name.toUpperCase()} : {fruit.pricePerKg}/kg
      </ol>
    );
  });
  return (
    <>
      <h3 className="catagory">{catagory}</h3>
      {listItemsList}
    </>
  );
}
List.defualtProps = {
  listItem: [],
  catagory: "",
};

List.propTypes = {
  catagory: PropTypes.string,
  listItem: PropTypes.array,
};
