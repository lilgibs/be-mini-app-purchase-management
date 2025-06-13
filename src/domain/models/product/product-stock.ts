import { Entity } from "../entity.";
import { IProductProps } from "./product";

export interface IProductStockProps {
  id?: string;
  productId: string;
  product?: IProductProps;
  quantity: number;
}

export interface IProductStock {
  unmarshall(): IProductStockProps;
}

export class ProductStockEntity extends Entity<IProductStockProps> implements IProductStock {

  static create(props: IProductStockProps): ProductStockEntity {
    return new ProductStockEntity(props);
  }

  unmarshall(): IProductStockProps {
    return {
      ...this._props
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }

  get productId(): string {
    return this._props.productId
  }

  get product(): IProductProps | undefined {
    return this._props.product
  }

  get quantity(): number {
    return this._props.quantity
  }
}