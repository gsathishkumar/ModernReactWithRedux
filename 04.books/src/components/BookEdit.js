import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  const handleSubmit = event => {
    event.preventDefault();
    editBookById(book.id, title);
    onSubmit();
  };

  const handleOnChange = event => {
    setTitle(event.target.value);
  };
  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleOnChange} />
        <button className="button is-primary">Update</button>
      </form>
    </div>
  );
}
export default BookEdit;
