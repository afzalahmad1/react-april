import "./styles.css";

function CustomButton({ myText, onClickFnc, myClass }) {
  return (
    <button onClick={onClickFnc} className={myClass}>
      <h3>{myText}</h3>
    </button>
  );
}

export default CustomButton;
