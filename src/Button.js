import './Button.css'
import React, { useEffect, useState } from "react";

function Button (){
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return(
    <div className={isActive ? 'autocontrolon':'autocontroloff'}
      onClick={toggleClass}>
        {isActive ? "Disable Autocontrol":"Enable Autocontrol"}
    </div>
  );
}
export default Button
