/* import { useContext, useEffect, useState } from "react";
import { MyContext } from "./pages/ContextPrivider";
export const Api_Url = `https://openlibrary.org`;

function Utility() {
  const [number_of_pages, setNumber_of_pages] = useState<string | null>(null);
  const [publish_date, setPublish_date] = useState<string | null>(null);

  const context = useContext(MyContext);
  if (!context) {
    console.log("Something went wrong");
    return null;
  }
  const { author } = context;

  useEffect(() => {
    if (author && author.length > 0) {
      fetch(`${Api_Url}${author[0].key}/editions.json`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.entries && data.entries[0]?.number_of_pages) {
            setNumber_of_pages(data.entries[0].number_of_pages.toString());
          } else {
            setNumber_of_pages("Number of pages not available.");
          } if (data && data.entries && data.entries[0]?.publish_date) {
            setPublish_date(data.entries[0].publish_date.toString());
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setPublish_date("Failed to fetch number of pages.");
        });
    }
  }, [author]);

  return (
    <div>
      <h1>Book Details</h1>
      <p>
        <strong>Number of Pages:</strong>{" "}
        {number_of_pages || "Loading number of pages..."}
      </p>
      <p>
        <strong>Publish Date:</strong>{" "}
        {publish_date || "Loading publish date..."}
      </p>
    </div>
  );
}

export default Utility;
 */