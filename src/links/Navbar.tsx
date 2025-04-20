import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { useContext } from "react";
import { MyContext } from "../pages/ContextPrivider";
import Mynen from "../imgs/mynen.png";
import Home from "../imgs/home.png";

function Navbar() {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  if (!context) {
    console.log("Something went wrong");
    return null;
  }
  const { inputValue, handleInputChange, handleSearchSubmit } = context;

  const onSubmit = async (e: React.FormEvent) => {
    await handleSearchSubmit(e); // Pass the event to prevent form reload
    navigate("/MyBook");
  };

  // display links
  const navLinks = [
    { to: "/", label: <img src={Home} alt="myneLista" className="home-icon" /> },
    { to: "/MyBook", label: "My Book" },
    { to: "/MyFavorite", label: "My Favorite List" },
  ];
  const NavStyle = {
    color: "black",
    padding: "9px",
    backgroundColor: "lightyellow",
    textDecoration: "none",
    borderRadius: "5px",
  };
  return (
    <div className="nav">
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          style={({ isActive }) =>
            isActive && link.to !== "/"
              ? NavStyle
              : { textDecoration: "none", color: "black" }
          }
        >
          {link.label}
        </NavLink>
      ))}

      <form onSubmit={onSubmit} className="searchFlt">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter book title"
        />
        <button type="submit">Search 🔍</button>
      </form>

      <img src={Mynen} alt="myneLista" className="mynen-icon" />
    </div>
  );
}

export default Navbar;