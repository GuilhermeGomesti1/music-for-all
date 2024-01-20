export interface StoreProduct {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: string;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
  quantity: number;
}

export interface StateProps {
  productData: [];
  favoriteData: [];
  userInfo: null | string;
  next: any;
}
