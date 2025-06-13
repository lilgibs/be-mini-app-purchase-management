export interface IPaginationProps {
  page: number,
  limit:number,
  totalPage: number,
  totalDisplayedRows: number,
  totalRows: number,
  nextPage: number | null,
  prevPage: number | null
}