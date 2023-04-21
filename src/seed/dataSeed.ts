import { Category, Estate, User } from '../interfaces';
import { hashPassword } from '../utils';

export const userSeed: User[] = [
  {
    name: 'Renato',
    lastname: 'Soca',
    email: 'renato@renato.com',
    password: hashPassword('renato'),
    token: '',
    confirmed: true,
  }
]

export const categorySeed: Category[] = [
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

export const estateSeed: Estate[] = [
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