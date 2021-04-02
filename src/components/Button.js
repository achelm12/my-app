import './Button.css'

function Button ({autoControl, onAutoControl}){
  const toggleClass = () => {
    onAutoControl(!autoControl);
  };
  return(
    <div className={autoControl ? 'autocontrolon':'autocontroloff'} onClick={toggleClass}>
        {autoControl ? "Disable Autocontrol":"Enable Autocontrol"}
    </div>
  );
}
export default Button
