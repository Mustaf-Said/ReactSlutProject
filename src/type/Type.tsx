export interface Books {
  key: string;
  has_fulltext: boolean;
  cover_i: number;
  title: string;
  author_name: string;
}

export interface BooksType {
  author: Books[];
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  deleteHandler: (key: string) => void;
  handleSearchSubmit: any;
}
