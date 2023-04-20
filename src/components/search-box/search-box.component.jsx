import './search-box.styles.css';

const SearchBox = ({ className, placeholderText, handleOnSearchChange }) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholderText}
    onChange={handleOnSearchChange}
  />
);

export default SearchBox;
