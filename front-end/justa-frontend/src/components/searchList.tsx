import React from 'react';
import ListItem from './listItem';

interface ResponseData {
  id: string;
  name: string;
  birthday: string;
  occupation: [];
  img: string;
  status: string;
}

interface Props {
  currentList: ResponseData[];
  searchTerm: string;
}

const SearchList: React.FC<Props> = ({ currentList, searchTerm }: Props) => {
  return (
    <div className="SearchList">
      {currentList
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
