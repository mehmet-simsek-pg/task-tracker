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

  const deleteTask = async (id) => {
    await axios.delete(`${url}/task/${id}`);
    getAllTasks();
  };

  const addTask = async (id, newTask) => {
    await axios.post(`${url}/task/${id}`, newTask);
    getAllTasks();
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  console.log(task);
  return (
    <div>
      <AddTask addTask={addTask} />
      <TaskList task={task} deleteTask={deleteTask} setTask={setTask}/>
    </div>
  );
};

export default Home;
