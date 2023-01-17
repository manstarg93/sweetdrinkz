import { useAppContext } from '../../hooks/useAppContext';
import { SearchContainer, SearchInput } from './Search.styles';
import { FaSearch } from 'react-icons/fa';
import { useContext } from 'react';
import { AppContext } from '../../store/AppContext';

const Search = () => {
  const { searchText, setSearchText } = useAppContext();
  return (
    <SearchContainer>
      <FaSearch />
      <SearchInput
        placeholder="Search"
        type="search"
        name="searchText"
        onChange={setSearchText}
        value={searchText}
      />
    </SearchContainer>
  );
};
export default Search;
