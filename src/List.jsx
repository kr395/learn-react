// To learn Render List
import React from "react";
import PropTypes from "prop-types";

export default function List(props) {
  const catagory = props.catagory;
  const listItems = props.listItem;
  listItems.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  listItems.sort((a, b) => {
    return a.pricePerKg - b.pricePerKg;
  });

  const lessThan40 = listItems.filter((fruit) => fruit.pricePerKg <= 40);
  const listItemsList = lessThan40.map((fruit) => {
    return (
      <h4 key={fruit.name}>
        {fruit.name} : {fruit.pricePerKg}/kg
      </h4>
    );
  });
  return (
    <>
      <div className="catagory">{catagory}
      <ul>{listItemsList}</ul>
      </div>
      
    </>
  );
}
List.defualtProps ={
  listItem: [],
  catagory: "",
};

List.propTypes ={
  catagory: PropTypes.string,
  listItem: PropTypes.array,
};