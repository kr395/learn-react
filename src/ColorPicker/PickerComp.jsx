import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from "react";

export default function PickerComp() {
  const [color, setColor] = useState("#ffffff");
  const [txtColor, setTxtColor] = useState("#000000");
  return (
    <div className="container">
      <div className="colorDisplay" style={{ backgroundColor: color }}>
        <h1 style={{ color: txtColor }}>{color}</h1>
      </div>
      <div className="colorPicker">
        <input
          type="color"
          id="colorPicker"
          name="color"
          value={color}
          onChange={() => {
            setColor(document.getElementById("colorPicker").value);
          }}
        />
      </div>
    </div>
  );
}
