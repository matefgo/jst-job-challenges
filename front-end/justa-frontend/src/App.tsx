import React, { useEffect, useState } from 'react';
import SearchBar from './components/searchBar';
import SearchList from './components/searchList';
import api from './services/api';

interface ResponseData {
  id: string;
  name: string;
  birthday: string;
  occupation: [];
  img: string;
  status: string;
}

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentList, setCurrentList] = useState<ResponseData[]>([]);

  useEffect(() => {
    api
      .get('/characters')
      .then(res => setCurrentList(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      <SearchBar changeSearchTerm={handleSearchTermChange} />
      <SearchList currentList={currentList} searchTerm={searchTerm} />
    </div>
  );
};

export default App;
