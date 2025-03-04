export interface Props {
  img: string;
  name: string;
  lastName: string;
  country: string;
  actions: React.ReactNode;
  uuid: string;
}

export interface PropsResponse {
  picture: {
    thumbnail: string;
  };
  name: {
    first: string;
    last: string;
  };
  location: {
    country: string;
  };
  login: {
    uuid: string;
  };
}