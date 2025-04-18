import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { useContext } from "react";
import { MyContext } from "../pages/ContextPrivider";


function Navbar() {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  if (!context) {
    console.log("Something went wrong");
    return null;
  }
  const { inputValue, handleInputChange, handleSearchSubmit } = context;

  const onSubmit = async (e: React.FormEvent) => {
    await handleSearchSubmit(e);  // Pass the event to prevent form reload
    navigate("/Browse");
  };


  //display links
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/Browse", label: "Browse" },
    { to: "/MyBooks", label: "My Books" },
  ]
  const NavStyle = {
    color: "black",
    padding: "5px",
    backgroundColor: "lightyellow",
    textDecoration: "none",


  }
  return (
    <div className="nav">
      {navLinks.map((link) => (
        <NavLink key={link.label}
          to={link.to}
          style={({ isActive }) => isActive ? NavStyle : { textDecoration: "none", padding: "1rem", color: "black" }}
        >
          {link.label}
        </NavLink>
      ))}

      <div className="searchFlt">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter book title"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}


export default Navbar;