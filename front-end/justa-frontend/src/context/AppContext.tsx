import { createContext } from 'react';

import {
  ResponseData,
  DefaultResponseData,
  HoveredItemType,
  DefaultHoveredItemType,
} from '../types/types';

type ContextType = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  listStatus: boolean;
  setListStatus: React.Dispatch<React.SetStateAction<boolean>>;
  currentList: ResponseData[];
  setCurrentList: React.Dispatch<React.SetStateAction<ResponseData[]>>;
  hoveredItem: HoveredItemType;
  setHoveredItem: React.Dispatch<React.SetStateAction<HoveredItemType>>;
  selectedItem: ResponseData;
  setSelectedItem: React.Dispatch<React.SetStateAction<ResponseData>>;
  pageStatus: string;
  setPageStatus: React.Dispatch<React.SetStateAction<string>>;
  currentImage: string;
  setCurrentImage: React.Dispatch<React.SetStateAction<string>>;
};

const defaultValue = {
  searchTerm: '',
  setSearchTerm: () => null,
  listStatus: false,
  setListStatus: () => null,
  currentList: [],
  setCurrentList: () => null,
  hoveredItem: DefaultHoveredItemType,
  setHoveredItem: () => null,
  selectedItem: DefaultResponseData,
  setSelectedItem: () => null,
  pageStatus: 'search',
  setPageStatus: () => null,
  currentImage: '',
  setCurrentImage: () => null,
};

export const AppContext = createContext<ContextType>(defaultValue);
