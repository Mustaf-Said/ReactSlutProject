import { Link, NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.scss";
import { useContext, useState } from "react";
import { MyContext } from "../context/ContextPrivider";
import Mynen from "../imgs/mynen.png";
import Home from "../imgs/home.png";

function Navbar() {
  const [mynenToggle, setMynenToggle] = useState(false);
  const handleMynenToggle = () => {
    setMynenToggle(!mynenToggle);
  };
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
    { to: "/myFavorite", label: "My List" },
  ];
  const NavStyle = {
    transform: "scale(1.1)",
    cursor: "pointer",
    boxShadow: "0 0 5px #fff",
    textDecoration: "none",
    color: "#555353",
    padding: "0.5rem",
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

      <img src={Mynen} alt="myneLista" className="mynen-icon"
        onClick={handleMynenToggle} />
      <div className="mynen-toggle" onClick={handleMynenToggle}>
        {mynenToggle && (
          <ul className="mynen-toggle-content">
            <li><Link to={"/"}>HOME</Link></li>
            <li><Link to={"/myFavorite"}>MY LIST</Link></li>
            <li><Link to={"/MyBook"}>MY BOOK</Link></li>
            <li>
              <a href="#footer" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
                CONTACT<br /> US
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;