import React from "react";
import { useState, useEffect } from "react";
import AddTask from "../components/AddTask";
import Task from "../components/Task";
import data from "../data";

const Home = () => {
  const [task, setTask] = useState([]);

  /*
  const url = process.env.REACT_APP_URL;
  const getInfo = async () => {
    const { data } = await axios.get(url);
    setTask(data);
  };
  useEffect(() => {
    getInfo();
  }, []);
*/
  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <div>
      <AddTask task={task} setTask={setTask} />
      <Task task={task} setTask={setTask} />
    </div>
  );
};

export default Home;
