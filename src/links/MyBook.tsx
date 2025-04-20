import { useContext } from "react";
import FetchData from "../pages/FetchData";
import { MyContext } from "../pages/ContextPrivider";

function MyBook() {
  const context = useContext(MyContext);
  if (!context) return null;

  const { author } = context;

  return (
    <div>
      <p style={{ fontSize: "1.7rem" }}>My Search Book</p>
      {author.length > 0 ? <FetchData /> : null}
    </div>
  );
}

export default MyBook;
