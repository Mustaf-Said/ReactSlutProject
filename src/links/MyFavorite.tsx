
/*import { MyContext } from "../pages/ContextPrivider";
import { Api_Url } from "../pages/FetchData"; */

function MyFavorite() {


  /*  const context = useContext(MyContext);
   const [description, setDescription] = useState<string | null>(null);
 
   if (!context) {
     console.log("Something went wrong");
     return null;
   }
 
   const { author } = context;
 
   useEffect(() => {
     if (author && author.length > 0) {
       fetch(`${Api_Url}${author[0].key}.json`)
         .then((response) => response.json())
         .then((data) => {
           if (data && data.description) {
             setDescription(
               typeof data.description === "string"
                 ? data.description
                 : data.description.value
             );
           } else {
             setDescription("No description available.");
           }
         })
         .catch((error) => {
           console.error("Error fetching data:", error);
           setDescription("Failed to fetch description.");
         });
     }
   }, [author]); */

  return (
    <div style={{ textAlign: "center", marginTop: "20px", height: "100vh" }}>
      <p style={{ fontSize: "1.7rem" }}>My Favorite Book-List</p>
      <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
        {/*   {description || "Loading description..."} */}
      </p>
      {/* <button type="button" onClick={() => deleteHandler(book.key)}>Delete</button> */}



    </div>
  );
}

export default MyFavorite;