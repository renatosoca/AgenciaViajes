export interface IEstate {
  id?: number;
  name: string;
  description?: string;
  bedrooms?: number;
  bathrooms?: number;
  parkingLots?: number;
  street: string;
  latitude: string;
  longitude: string;
  image: string;
  price: number;
  published: boolean;
  userId?: number;
  categoryId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}