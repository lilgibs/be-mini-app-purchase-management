import { Entity } from "../entity.";
import { IProductProps } from "../product/product";

export interface IPurchaseProps {
  id?: string
  productId: string
  quantity: number;
  status: "waiting_for_payment" | "completed" | "canceled";
  product?: IProductProps
}

export interface IProduct {
  unmarshall(): IPurchaseProps;
}

export class PurchaseEntity extends Entity<IPurchaseProps> implements IProduct {

  static create(props: IPurchaseProps): PurchaseEntity {
    return new PurchaseEntity(props);
  }

  unmarshall(): IPurchaseProps {
    return {
      ...this._props
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }

  get productId(): string {
    return this._props.productId;
  }

  get quantity(): number {
    return this._props.quantity;
  }

  get status(): "waiting_for_payment" | "completed" | "canceled" {
    return this._props.status;
  }

  get product(): IProductProps | undefined {
    return this._props.product;
  }
}