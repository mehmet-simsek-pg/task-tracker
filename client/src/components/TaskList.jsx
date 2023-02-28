import { FaTimesCircle } from "react-icons/fa";
import axios from "axios";

const TaskList = ({ task, getTask, setTask }) => {

  const url = process.env.REACT_APP_URL;
  
  const deleteTask = async (id) => {
    await axios.delete(`${url}${id}/`);
    getTask();
  };
  return (
    <div>
      {task.map((data) => {
        const { id, text, day, isComplete } = data;

        return (
          <div
            className={isComplete ? "done" : "task"}
            key={id}
            onDoubleClick={() =>
              setTask(
                task.map((i) =>
                  i.id === id ? { ...i, isComplete: !i.isComplete } : i
                )
              )
            }
          >
            <h3>
              {text}
              <FaTimesCircle
                style={{ color: "red" }}
                onClick={() => deleteTask(id)}
              />
            </h3>
            <h6>{day}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
