import React, { useState } from "react";
import App from "./App";

/** props: none
 *
 * App --> BoxList --> Box and NewBoxForm
 */

function BoxList() {
  const initialState = {
    height: "",
    width: "",
    backgroundColor: "",
  };
  const [formData, setFormData] = useState(initialState);

  function handleChange(evt) {
    const { name, value } = evt.target;
    let newFormData = { ...formData };
    newFormData[name] = value;
    setFormData(newFormData);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    //add box function
    setFormData(initialState);
  }

  //possible need for looping logic to render multiple boxes
  return (
    <div>
      <NewBoxForm
        height={height}
        width={width}
        backgroundColor={backgroundColor}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Box 
        height={height} 
        width={width} 
        backgroundColor={backgroundColor} />
    </div>
  );
}

export default BoxList;