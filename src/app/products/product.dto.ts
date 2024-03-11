import { Product } from './product.model';
export interface createProductDTO
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

type example = Pick<Product, 'color' | 'description'>;

export interface updateProductDTO extends Partial<createProductDTO> {}

type example2 = Required<Product>;

export interface findProductDTO extends Readonly<Partial<Product>> {}

type example3 = Readonly<Product>;
