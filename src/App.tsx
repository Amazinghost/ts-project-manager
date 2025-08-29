import { useEffect } from "react";
import { useTaskStore } from "./stores/useTaskStore";
import { Outlet } from "react-router";

const App = () => {
  const { tasks, getAllTasks } = useTaskStore();

  console.log("Tasks: ", tasks);

  useEffect(() => {
    getAllTasks();
  }, [getAllTasks]);

  return (
    <div>
      <header></header>
      <main>
        <aside></aside>
        <section>
          <Outlet />
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
