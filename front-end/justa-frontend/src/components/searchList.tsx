import React, { useContext } from 'react';
import ListItem from './listItem';
import { AppContext } from '../context/AppContext';
import { ResponseData, DefaultResponseData } from '../types/types';

const SearchList: React.FC = () => {
  const { listStatus, currentList, searchTerm } = useContext(AppContext);

  const filterList = (item: ResponseData) => {
    let result: ResponseData = DefaultResponseData;
    if (searchTerm === '') {
      result = item;
    } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      result = item;
    }
    return result;
  };

  return (
    <div className="SearchList">
      {listStatus &&
        currentList
          .filter(item => {
            return filterList(item);
          })
          .map((item, key) => {
            const id = `${key}`;
            return <ListItem key={id} item={item} />;
          })}
    </div>
  );
};

export default SearchList;
