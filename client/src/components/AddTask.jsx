import { useState } from "react";
import Button from "./Button";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [id, setId] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const count = 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    setId(count + 1);
    setIsComplete(true);
    addTask({ id: id, text: text, day: day, isComplete: isComplete });
    setText("");
    setDay("");
  };

  const [buttonData, setButtonData] = useState({
    color: "red",
    text: "CLOSE ADD TASK BAR",
  });

  const handleClick = () => {
    buttonData.color === "red"
      ? setButtonData({ color: "purple", text: "SHOW ADD TASK BAR" })
      : setButtonData({ color: "red", text: "CLOSE ADD TAK BAR" });
  };

  return (
    <div>
      <header className="header">
        <h1>TASK TRACKER</h1>
        <Button buttonData={buttonData} handleClick={handleClick} />
      </header>
      {buttonData.color === "red" && (
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="text">Task</label>
            <input
              id="text"
              type="text"
              name="text"
              value={text}
              placeholder="Add Task"
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input
              id="day"
              type="date"
              name="day"
              value={day}
              placeholder="Add Task"
              onChange={(e) => {
                setDay(e.target.value);
              }}
            />
          </div>
          <div>
            <button className="btn btn-submit" type="submit">
              SUBMİT
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
export default AddTask;
