import "./App.css";
import { useTaskStore } from "./stores/useTaskStore";

function App() {
  const { tasks, addTask } = useTaskStore();

  console.log("Tasks: ", tasks);

  return (
    <div>
      <h1 className="text-red-500">Vite + React</h1>
      <button onClick={() => addTask("Test")}>Add Task</button>
    </div>
  );
}

export default App;
