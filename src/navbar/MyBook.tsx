
import "../styles/MyBook.scss"
import { useContext } from "react";
import FetchData from "../components/FetchData";
import { MyContext } from "../context/ContextPrivider";
import footerIMg from "../imgs/footer.png";
export const Api_Url = `https://openlibrary.org`;


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

