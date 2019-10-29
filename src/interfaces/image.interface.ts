export interface Image {
  id: string;
  title: string;
  server: string;
  secret: string;
  imageUrl: string;
}

export interface ImageResponse {
  selected: number;
  isModalOpen: boolean;
  searchText: string;
  total: string;
  currentPage: number;
  pages: number;
  images: Image[];
}
