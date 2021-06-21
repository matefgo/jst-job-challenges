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

  const handleFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
    const eventObject = {
      id: event.currentTarget.id,
      event: event.type,
    };
    setHoveredItem(eventObject);
    setListStatus(false);
    setPageStatus('details');
  };

  const handleKeyDown = () => {
    return null;
  };

  return (
    <div className="listItem">
      <button
        id={item.char_id.toString()}
        type="button"
        onKeyDown={handleKeyDown}
        onMouseOver={handleMouseHover}
        onFocus={handleFocus}
      >
        {item.name}
      </button>
    </div>
  );
};

export default ListItem;
