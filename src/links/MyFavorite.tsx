
import { MyContext } from "../pages/ContextPrivider";
import { useContext } from "react";


function MyFavorite() {
  const context = useContext(MyContext);
  if (!context) {
    console.log("Something went wrong");
    return null;
  }

  const { favorites, author } = context;
  return (
    <div className="favoritesBook">
      <h2>Mina Favoriter</h2>
      <ol>
        {author
          .filter(book => favorites.includes(book.key))
          .map(book => (
            <li key={book.key}>{book.title}</li>
          ))}
      </ol>

    </div>
  )
}
export default MyFavorite;


