import React, { useState, useEffect } from 'react';
import { AppContext } from './AppContext';
import api from '../services/api';

import {
  ResponseData,
  DefaultResponseData,
  HoveredItemType,
  DefaultHoveredItemType,
} from '../types/types';

type Props = {
  children: React.ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
  const [pageStatus, setPageStatus] = useState('search');
  const [searchTerm, setSearchTerm] = useState('');
  const [listStatus, setListStatus] = useState<boolean>(false);
  const [currentList, setCurrentList] = useState<ResponseData[]>([]);
  const [hoveredItem, setHoveredItem] = useState<HoveredItemType>(
    DefaultHoveredItemType,
  );
  const [selectedItem, setSelectedItem] =
    useState<ResponseData>(DefaultResponseData);
  const [currentImage, setCurrentImage] = useState<string>('');

  useEffect(() => {
    api
      .get('/characters')
      .then(res => {
        setCurrentList(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (hoveredItem.event === 'mousedown') {
      const findSelected = currentList.find(item => {
        return item.char_id.toString() === hoveredItem.id ? item : null;
      });
      if (findSelected) {
        setSelectedItem(findSelected);
      }
    }
  }, [hoveredItem, currentList]);

  useEffect(() => {
    if (hoveredItem.event === 'mouseover') {
      const hoveredImage = currentList.find(item => {
        return item.char_id.toString() === hoveredItem.id;
      });
      if (hoveredImage?.img) {
        setCurrentImage(hoveredImage.img);
      }
    } else if (selectedItem.img !== '') {
      setCurrentImage(selectedItem.img);
    }
  }, [hoveredItem, selectedItem, currentList]);

  const contextValue = {
    searchTerm,
    setSearchTerm,
    listStatus,
    setListStatus,
    currentList,
    setCurrentList,
    hoveredItem,
    setHoveredItem,
    selectedItem,
    setSelectedItem,
    pageStatus,
    setPageStatus,
    currentImage,
    setCurrentImage,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
