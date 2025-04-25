export interface Books {
  key: string;
  has_fulltext: boolean;
  cover_i: number;
  title: string;
  author_name: string;
  first_publish_year: number;
  total_pages?: number;
  /*  favorites: string[]; */
}

export interface BooksType {
  author: Books[];
  favorites: string[];
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  deleteHandler: (key: string) => void;
  handleSearchSubmit: any;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  toggleHandler: () => void;
  toggleFavorite: (bookId: string) => void;

}
