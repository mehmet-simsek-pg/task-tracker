
const Button = ({ buttonData, handleClick }) => {

  return (
    <button
      className="btn"
      style={{ backgroundColor: buttonData.color }}
      onClick={handleClick}
    >
      {buttonData.text}
    </button>
  );
};

export default Button;
