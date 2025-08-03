function ListItem() {
  return (
    <div className="border-2 border-amber-100 flex justify-center items-center p-2 bg-amber-50 m-2">
      <div className="w-4/5 text-[22px]">Task1</div>
      {/* <div className=" text-center border-2 border-red-600 p-1 cursor-pointer hover:bg-red-500 hover:text-white">
        Completed
      </div> */}

      <button className=" text-center bg-green-400 p-2 rounded-full cursor-pointer hover:bg-green-700 hover:text-white">
        Completed
      </button>
    </div>
  );
}

function ToDoList() {
  return (
    <div className="">
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
}

export default ToDoList;
