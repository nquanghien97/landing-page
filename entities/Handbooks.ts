export interface HandbookEntity {
  data: HandbookData[],
  paging: {
    total: number;
    page: number;
    pageSize: number;
  }
}

export interface HandbookData {
  id: number;
  title: string;
  imageUrl: string;
  content: string;
  createdAt: Date;
  slug: string;
}