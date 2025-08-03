import AddItem from "./components/AddItem";
import Home from "./components/Home";
import List from "./components/List";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="list" element={<List />} />
          <Route path="addForm" element={<AddItem />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
