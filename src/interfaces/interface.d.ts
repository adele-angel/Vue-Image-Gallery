export interface ImageResponse {
  config: {};
  data: ImagesData;
  headers: {};
  request: {};
  status: number;
  statusText: "";
}

export interface ImagesData {
  photos: Images;
  stat: string;
}

export interface Images {
  page: number;
  pages: string;
  perpage: number;
  total: string;
  photo: Image[];
}

export interface Image {
  id: string;
  owner: string;
  secret: string;
  server: string | number;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
}
