export type GetProductParams = {
  _page: number;
  _limit: number;
  name_like?: string;
};

export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  unit: string;
  description: string;
};
