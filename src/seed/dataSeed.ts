import { ICategory, IComment, IEstate, IUser } from '../interfaces';
import { hashPassword } from '../utils';

export const userSeed: IUser[] = [
  {
    name: 'Renato',
    lastname: 'Soca',
    email: 'renato@renato.com',
    password: hashPassword('renato'),
    token: '',
    hasVerifiedEmail: true,
    status: 'active',
    image: '',
  }
]

export const categorySeed: ICategory[] = [
  {
    name: 'Residencial',
  },
  {
    name: 'Comercial',
  },
  {
    name: 'Industrial',
  },
  {
    name: 'Terrenos',
    description: 'En estos terrenos van a poder construir su casa de sus sueños',
  },
  {
    name: 'Agrícola',
    description: 'En la agricola se puede sembrar todo tipo de plantas',
  },
  {
    name: 'Propiedad con vista al mar',
    description: 'En esta propiedad se puede disfrutar de la vista al mar',
  }
]

export const estateSeed: IEstate[] = [
  {
    name: 'House',
    description: 'lorem ipsum dolor sit amet prueba ',
    bedrooms: 3,
    bathrooms: 2,
    parkingLots: 2,
    street: 'Calle 1',
    latitude: '6.56629751',
    longitude: '-80.2487946421',
    image: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
    price: 2000.00,
    published: true,
    userId: 1,
    categoryId: 1,
  },
  {
    name: 'House 1',
    description: 'lorem ipsum dolor sit amet prueba 1',
    bedrooms: 1,
    bathrooms: 1,
    parkingLots: 1,
    street: 'Avenida Los Heroes',
    latitude: '1.332123',
    longitude: '-73.2313123',
    image: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
    price: 2139.15,
    published: true,
    userId: 1,
    categoryId: 2,
  }
]

export const commentSeed: IComment[] = [
  {
    comment: 'lorem ipsum dolor sit amet prueba 1',
    userId: 1,
    estateId: 1,
  },
  {
    comment: 'lorem ipsum dolor sit amet prueba 2',
    userId: 1,
    estateId: 1,
  },
  {
    comment: 'lorem ipsum dolor sit amet prueba 3',
    userId: 1,
    estateId: 1,
  },
  {
    comment: 'lorem ipsum dolor sit amet prueba 4',
    userId: 1,
    estateId: 2,
  }
]