export interface ResponseData {
  // eslint-disable-next-line camelcase
  char_id: number;
  name: string;
  birthday: string;
  occupation: [];
  img: string;
  status: string;
}

export const DefaultResponseData: ResponseData = {
  char_id: 0,
  name: '',
  birthday: '',
  occupation: [],
  img: '',
  status: '',
};

export interface HoveredItemType {
  id: string;
  event: string;
}

export const DefaultHoveredItemType: HoveredItemType = {
  id: '',
  event: '',
};
