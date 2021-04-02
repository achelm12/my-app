import './SlidingButton.css'
import React, { useState } from "react";

function SlidingButton({autoControl}) {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className={  autoControl ? 'containerdisable' : (isActive ? 'containernight':'containerday')}>
      <div className={autoControl ? 'disablebutton'    : (isActive ? 'nightbutton':'daybutton')  }
           onClick={autoControl ? null : toggleClass }>
          {autoControl ? 'Under Autocontrol':isActive ? "Open Blinds":"Close Blinds"}
      </div>
    </div>
  );
}

export default SlidingButton
