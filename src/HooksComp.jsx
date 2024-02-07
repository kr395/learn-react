// onChange = event handler used primarily with form elements
// ex. <input>, <textarea>, <select>, <radio>
// Triggers a function every time the value of the input changes
import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from "react";

export default function HooksComp(props) {
  // const [count, setCount] = useState(0);
  const [name, setName] = useState("Guest");
  const [payment, setPayment] = useState("Master Card");
  const[deliveryMethod, setDeliveryMethod] = useState("");
  return (
    // Code For Normal Counter

    // <div>
    //   <button
    //     onClick={() => {
    //       setCount(count + 1);
    //     }}
    //   >
    //     ➕
    //   </button>
    //   <p>{count}</p>
    //   <button
    //     onClick={() => {
    //       if (count <= 0) {
    //         setCount(0);
    //       } else {
    //         setCount(count - 1);
    //       }
    //     }}
    //   >
    //     ➖
    //   </button>
    // </div>

    // Code for onChange method

    <div>
      <input
        type="text"
        placeholder="Type Your Name"
        onChange={() => {
          setName(event.target.value);
        }}
      ></input>
      <h3>Name : {name}</h3>
      <select
        value={payment}
        onChange={() => {
          setPayment(event.target.value);
        }}
      >
        <option>Master Card</option>
        <option>Visa</option>
        <option>Paypal</option>
        <option>UPI</option>
        <option>Net Banking</option>
      </select>
      <p>Your Selected Payment Method is {payment}</p>

      <lebel>
        <input type="radio" name="pickup" value="Pick From store" chacked ={deliveryMethod == "Pick from Store"} onChange ={()=>{
          setDeliveryMethod(event.target.value)
        }}/> Pick from Store
      </lebel>
      <lebel>
        <input type="radio" name="pickup" value="Home Delivery"
          chacked ={deliveryMethod == "Home Delivery"} onChange ={()=>{
            setDeliveryMethod(event.target.value)
          }} /> Home Delivery
      </lebel>
       
      <p>Your Selected Payment Method is {deliveryMethod}</p>
    </div>
  );
}
