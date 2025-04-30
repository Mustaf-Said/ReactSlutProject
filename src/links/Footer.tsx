import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";

function Footer() {
  return (

    <footer className="footerContainer">
      <section >
        <p>Contact us: <br />
          <MdOutlineAlternateEmail />
          <a href="mailto: raygal99@gmail.com"> raygal99@gmail.com</a><br />
          <FaBookAtlas /> <a href="https://openlibrary.org/"> https://openlibrary.org</a>
        </p>
      </section>
      <section style={{ textAlign: "center" }}>
        <p>© 2023 Book Finder. All rights reserved.</p>
        <p>Book App is a web application that helps you find books based on your preferences.</p>
        <p>Privacy Policy | Terms of Service</p>
        <p>Developed by Studen på FD24</p>
        <p>Version 1.0.0</p>
      </section>
      <section className="socialMedia">
        <p>Follow us on social media :<br />
          <FaFacebookSquare /> <a href="https://www.facebook.com/">Facebook</a><br />
          <FaTwitterSquare /> <a href="https://twitter.com/">Twitter</a><br />
          <FaInstagramSquare /> <a href="https://www.instagram.com/">Instagram</a><br />
          <FaLinkedin /> <a href="https://www.linkedin.com/">LinkedIn</a>
        </p>
      </section>
    </footer>


  );
}

export default Footer;