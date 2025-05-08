// hooks/useBookDetails.ts
import { useState, useEffect } from "react";

export const API_URL = "https://openlibrary.org";

const useBookDetails = (bookKey: string) => {
  const [description, setDescription] = useState<string | null>(null);
  const [numberOfPages, setNumberOfPages] = useState<string | null>(null);
  const [publishDate, setPublishDate] = useState<string | null>(null);
  const [languages, setLanguages] = useState<string | null>(null);

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const res = await fetch(`${API_URL}${bookKey}.json`);
        const data = await res.json();
        if (data && data.description) {
          setDescription(
            typeof data.description === "string"
              ? data.description
              : data.description.value
          );
        } else {
          setDescription("This work doesn't have a description yet.");
        }
      } catch (error) {
        console.error("Error fetching description:", error);
        setDescription("Failed to fetch description.");
      }
    };

    const fetchEditionDetails = async () => {
      try {
        const res = await fetch(`${API_URL}${bookKey}/editions.json`);
        const data = await res.json();
        if (data && data.entries && data.entries[0]) {
          const entry = data.entries[0];
          setNumberOfPages(entry.number_of_pages?.toString() || null);
          setPublishDate(entry.publish_date?.toString() || null);
          if (entry.languages) {
            setLanguages(
              Array.isArray(entry.languages)
                ? entry.languages
                  .map((lang: { key: string }) =>
                    lang.key.replace("/languages/", "")
                  )
                  .join(", ")
                : "English"
            );
          }
        }
      } catch (error) {
        console.error("Error fetching edition details:", error);
        setPublishDate("Failed to fetch number of pages.");
      }
    };

    fetchDescription();
    fetchEditionDetails();
  }, [bookKey]);

  return { description, numberOfPages, publishDate, languages };
};

export default useBookDetails;
