import { useState } from 'react';
import './search-bar.css';

function SearchBar({ parentMethod }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = event => {
    event.preventDefault();
    parentMethod(term);
  };

  const handleChange = event => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
