import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;
