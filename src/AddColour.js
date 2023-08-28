import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("skyblue");
  const [colorList, setColorList] = useState(["orange", "crimson", "pink"]);

  const styles = {
    backgroundColor: color,
  };

  return (
    <div>
      <div className="add-color">
        <input
          style={styles}
          type="text"
          onChange={(event) => setColor(event.target.value)}
          value={color}
        />
        <button
          onClick={() => {
            setColorList([...colorList, color]);
          }}
        >
          Add color
        </button>
      </div>
      {colorList.map((clr, index) => (
        <ColorBox key={index} clr={clr} />
      ))}
    </div>
  );
}
