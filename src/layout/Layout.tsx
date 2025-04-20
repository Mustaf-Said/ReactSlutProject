import { Outlet } from "react-router-dom";
import Navbar from "../links/Navbar";
import Footer from "../links/Footer";

function Layout() {

  return (
    <div>

      <Navbar />
      <div style={{ border: "1px solid #8a8b8b", borderRadius: "5px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <main>
          <Outlet />
        </main>

        <Footer />

      </div>
    </div>
  );
}

export default Layout;
