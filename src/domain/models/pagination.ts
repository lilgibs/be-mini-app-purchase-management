export interface IPaginationProps {
  currentPage: number,
  totalPage: number,
  totalDisplayedRows: number,
  totalRows: number,
  nextPage: number | null,
  prevPage: number | null
}