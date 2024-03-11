import { faker } from '@faker-js/faker';

import { Product } from './product.model';
import {
  createProductDTO,
  updateProductDTO,
  findProductDTO,
} from './product.dto';

export const products: Product[] = [];

export const addProduct = (data: createProductDTO): Product => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (
  id: string,
  changes: updateProductDTO
): Product => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  };
  return products[index];
};

export const findProduct = (dto: findProductDTO): Product[] => {
  // code
  // dto.color = 'blue';
  // isNew = true;
  return products;
};
