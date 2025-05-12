// components/BookCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FcReading } from "react-icons/fc";
import { FaBookReader } from "react-icons/fa";

interface BookCardProps {
  book: any;
  isFavorite: boolean;
  isReading: boolean;
  onToggleFavorite: (key: string) => void;
  onToggleReading: (key: string) => void;
  renderStars: (key: string) => React.ReactNode;
}

const BookCard: React.FC<BookCardProps> = ({
  book,
  isFavorite,
  isReading,
  onToggleFavorite,
  onToggleReading,
  renderStars,
}) => {
  return (

    <div className="imgsDetails">
      <Link target="_blank" to={`https://openlibrary.org${book.key}/${book.title}`}>
        {book.cover_i && (
          <img
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
            alt={book.title}
          />
        )}
      </Link>
      <button className="favoriteButton" onClick={() => onToggleFavorite(book.key)}>
        {isFavorite ? <FaHeart style={{ color: "red" }} /> : <CiHeart />}
      </button>
      <button className="readButton" onClick={() => onToggleReading(book.key)}>
        {isReading ? <FcReading /> : <FaBookReader style={{ color: "black" }} />}
      </button>
      {isReading && <div className="ratingStars">Betyg: {renderStars(book.key)}</div>}
    </div>
  );
};

export default BookCard;
