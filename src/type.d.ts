
export type Data = {
  name: string
  age: number
}

export interface ValueContext {
  data: Data
  setData: (data: Data) => any
}