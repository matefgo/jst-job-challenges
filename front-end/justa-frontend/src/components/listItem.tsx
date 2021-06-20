import React from 'react';

interface ResponseData {
  id: string;
  name: string;
  birthday: string;
  occupation: [];
  img: string;
  status: string;
}

interface Props {
  item: ResponseData;
}

const ListItem: React.FC<Props> = ({ item }: Props) => {
  return <div className="listItem">{item.name}</div>;
};

export default ListItem;
