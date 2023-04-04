import React from "react";
import { taskList } from "./Recoil";
import { useRecoilState } from "react";
function TaskPage() {
  const [data, setData] = useRecoilState(taskList);
  return (
    <div>
      <h1>Task Page</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default TaskPage;
