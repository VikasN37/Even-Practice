import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="w-screen h-screen border-2 flex justify-center">
      <div className="flex-col gap-2.5 w-4/5 sm:w-3/5 h-24 m-10">
        <div className="p-5 flex items-center justify-center text-3xl font-bold">
          Tasks To Do :
        </div>
        <div>
          <ToDoList />
        </div>
      </div>
    </div>
  );
}

export default App;
