export interface ProductsDetailsProps {
  DetailsObject: {
    title: string
    id: string
    description: string | string[]
  }[]
  DetailsList: {
    title: string
  }[]
}
