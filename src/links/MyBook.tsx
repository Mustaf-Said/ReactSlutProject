import "./MyBook.scss"
import { useContext } from "react";
import FetchData from "../pages/FetchData";
import { MyContext } from "../pages/ContextPrivider";
import footerIMg from "../imgs/footer.png";
function MyBook() {
  const context = useContext(MyContext);


  if (!context) {
    console.log("Something went wrong");
    return null;
  }
  const { author } = context;


  return (
    <div>
      <div className="myBookContainer">
        {author.length > 0 ? <FetchData /> : null}


      </div>
      <div className="myBookFooterImg">
        <img src={footerIMg} alt="footer-img" />
      </div>
    </div>
  );
}

export default MyBook;

