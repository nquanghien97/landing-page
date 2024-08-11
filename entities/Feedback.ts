export interface FeedbackEntity {
  data: FeedbackData[],
  paging: {
    total: number;
    page: number;
    pageSize: number;
  }
}

export interface FeedbackData {
  id: number;
  title: string;
  imageUrl: string;
  content: string;
  createdAt: Date;
  slug: string;
}