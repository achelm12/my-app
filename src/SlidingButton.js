import './SlidingButton.css'
import React, { useEffect, useState } from "react";

function SlidingButton() {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className={isActive ? 'containernight':'containerday'}>
      <div className={isActive ? 'nightbutton':'daybutton'}
        onClick={toggleClass}>
          {isActive ? "Open Blinds":"Close Blinds"}
      </div>
    </div>
  );
}

export default SlidingButton
