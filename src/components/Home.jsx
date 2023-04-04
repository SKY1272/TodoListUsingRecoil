import React, { useState } from "react";
import { taskList } from "./Recoil";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";
function Home() {
  const history = useHistory();
  const [task, setTask] = useState("");
  const [data, setData] = useRecoilState(taskList);
  function AddTask(e) {
    e.preventDefault();
    setData([...data, task]);
    setTask(" ");
  }
  return (
    <div>
      <form onSubmit={AddTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>AddTask</button>
      </form>
      <button onClick={(e) => history.push("/tasks")}>check task</button>
    </div>
  );
}
export default Home;
