import { v4 as uuid } from 'uuid'

export abstract class Entity<T> {
  protected readonly _id: string
  protected readonly _props: T

  constructor(props: T, id?: string) {
    this._props = props
    this._id = id || uuid()
  }
}