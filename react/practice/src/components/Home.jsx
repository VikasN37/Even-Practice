import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <button>Switch mode</button>
      <Outlet />
    </>
  );
}
export default Home;
