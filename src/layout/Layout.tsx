import { Outlet } from "react-router-dom";
import Navbar from "../links/Navbar";
import Footer from "../links/Footer";

function Layout() {

  return (
    <div>

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
