import { IPaginationProps } from "./pagination";


export interface IDefaultResponseProps<T> {
  data: T
  pagination?: IPaginationProps
}

export interface IDefaultResponse {
  unmarshall(): IDefaultResponseProps<any>
}

export class DefaultResponse<T> implements IDefaultResponse {

  constructor(public data: T, public pagination?: IPaginationProps) {

  }

  unmarshall(): IDefaultResponseProps<any> {
    return {
      data: this.data,
      pagination: this.pagination
    }
  }
}