import { Owner } from './Owner'
export interface Farm {
  setItem(arg0: any, objJson: string): unknown
  id: number
  name: string
  geometry: any
  area: number
  centroid: number[]
  creation_date?: Date
  owner: Owner

}
