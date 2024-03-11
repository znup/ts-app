import { faker } from '@faker-js/faker';

import {
  addProduct,
  findProduct,
  products,
  updateProduct,
} from './products/product.service';

for (let i = 0; i < 50; i++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.urlLoremFlickr({ width: 640, height: 480 }),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.multiple(faker.lorem.word, { count: 3 }),
    title: faker.commerce.productName(),
    stock: faker.number.int({ min: 10, max: 100 }),
    categoryId: faker.string.uuid(),
  });
}

console.log(products);
const product = products[0];
updateProduct(product.id, {
  title: 'New title',
  stock: 100,
});

findProduct({
  stock: 12,
  color: 'red',
  createdAt: new Date(),
  isNew: true,
});
