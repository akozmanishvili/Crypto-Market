import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/coindetails"}>Coin Details</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
