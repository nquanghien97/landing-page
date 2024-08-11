export interface ProductEntity {
  data: DataProducts[];
  paging: {
    total: number;
    page: number;
    pageSize: number;
  }
}

export interface DataProducts {
  id: number;
  name: string;
  price: number;
  images: {
    id: number;
    imageUrl: string;
    productId: number;
  }[];
  description: string;
  details: string;
  slug: string;
}