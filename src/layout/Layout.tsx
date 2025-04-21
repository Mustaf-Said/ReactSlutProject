import { Outlet } from "react-router-dom";
import Navbar from "../links/Navbar";
import Footer from "../links/Footer";

function Layout() {

  return (
    <div>

      <Navbar />

      <main style={{ border: "1px solid rgb(163, 164, 164)", borderRadius: "2px", boxShadow: "1px 5px 10px 0 #2c2a26;" }}>
        <Outlet />
      </main>

      <Footer />


    </div>
  );
}

export default Layout;
