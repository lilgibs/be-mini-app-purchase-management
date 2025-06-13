import { Entity } from "../entity.";

export interface IProductProps {
  id?: string;
  name: string;
  price: number;
}

export interface IProduct {
  unmarshall(): IProductProps;
}

export class ProductEntity extends Entity<IProductProps> implements IProduct {

  static create(props: IProductProps): ProductEntity {
    return new ProductEntity(props);
  }

  unmarshall(): IProductProps {
    return {
      ...this._props
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }

  get name(): string {
    return this._props.name;
  }

  get price(): number {
    return this._props.price;
  }
}