import React from "react";
import { useState, useEffect } from "react";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import axios from "axios";

const Home = () => {
  const [task, setTask] = useState([]);

  const url = process.env.REACT_APP_URL;

  const getAllTasks = async () => {
    const { data } = await axios.get(`${url}/tasks`);
    setTask(data.tasks);
  };

  useEffect(() => {
    getAllTasks();
    // eslint-disable-next-line
  }, []);
  const deleteTask = async (id) => {
    await axios.delete(`${url}/task/${id}`);
    getAllTasks();
  };

  const addTask = async (newTask) => {
    await axios.post(`${url}/task`, newTask);
    getAllTasks();
  };

  console.log(task);
  return (
    <div>
      <AddTask addTask={addTask} />
      <TaskList task={task} deleteTask={deleteTask} setTask={setTask} />
    </div>
  );
};

export default Home;
