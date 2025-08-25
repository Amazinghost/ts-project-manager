import { useEffect } from "react";
import "./App.css";
import { useTaskStore } from "./stores/useTaskStore";
import { Outlet } from "react-router";

function App() {
  const { tasks, addTask, getAllTasks } = useTaskStore();

  console.log("Tasks: ", tasks);


  useEffect(() => {
    getAllTasks();
  }, [getAllTasks]);

  return (
    <div>
      <h1 className="text-red-500">Vite + React</h1>
      <button type="button" onClick={() => addTask("Test")}>
        Add Task
      </button>
      <Outlet />
    </div>
  );
}

export default App;
