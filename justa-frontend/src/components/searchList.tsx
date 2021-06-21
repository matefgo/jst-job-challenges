import React, { useContext } from 'react';
import ListItem from './listItem';
import { AppContext } from '../context/AppContext';

const SearchList: React.FC = () => {
  const { listStatus, currentList, searchTerm } = useContext(AppContext);

  return (
    <div className="SearchList">
      {listStatus &&
        currentList
          .filter(item => {
            let result: unknown;
            if (searchTerm === '') {
              result = item;
            } else if (
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              result = item;
            }
            return result;
          })
          .map((item, key) => {
            const id = `${key}`;
            return <ListItem key={id} item={item} />;
          })}
    </div>
  );
};

export default SearchList;
