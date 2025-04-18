import { useContext } from "react";
import FetchData from "../pages/FetchData";
import { MyContext } from "../pages/ContextPrivider";

function Browse() {
  const context = useContext(MyContext);
  if (!context) return null;

  const { author } = context;

  return (
    <div>
      <h2>Browse</h2>
      {author.length > 0 ? <FetchData /> : <p>Searching or no results yet...</p>}
    </div>
  );
}

export default Browse;
