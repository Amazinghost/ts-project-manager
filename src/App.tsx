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
    <div className="flex flex-col w-full min-h-screen">
      <header>HEADER</header>
      <main className="flex flex-1 justify-center items-center">
        <aside></aside>
        <section>
          <Outlet />
        </section>
      </main>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>{`Copyright © ${new Date().getFullYear()} - All rights reserved by ACME Industries Ltd`}</p>
        </aside>
      </footer>
    </div>
  );
};

export default App;
