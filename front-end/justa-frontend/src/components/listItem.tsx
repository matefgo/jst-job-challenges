import React, { useContext } from 'react';
import { ResponseData } from '../types/types';
import { AppContext } from '../context/AppContext';

interface Props {
  item: ResponseData;
}

const ListItem: React.FC<Props> = ({ item }: Props) => {
  const { setHoveredItem, setListStatus, setPageStatus } =
    useContext(AppContext);

  const handleMouseHover = (event: React.MouseEvent<HTMLButtonElement>) => {
    const eventObject = {
      id: event.currentTarget.id,
      event: event.type,
    };
    setHoveredItem(eventObject);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    const eventObject = {
      id: event.currentTarget.id,
      event: event.type,
    };
    setHoveredItem(eventObject);
    setListStatus(false);
    setPageStatus('details');
  };

  return (
    <div className="listItem">
      <button
        id={item.char_id.toString()}
        type="button"
        onMouseOver={handleMouseHover}
        onMouseDown={handleMouseDown}
        onKeyDown={() => null}
        onFocus={() => null}
      >
        {item.name}
      </button>
    </div>
  );
};

export default ListItem;
