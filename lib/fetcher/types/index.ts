export type Item ={
    name: string,
    thumb: string,
    url: string,
  }

export type Items = Item[]

export type Threshold = {
    start: number,
    end: number,
  }
  
export type LovingRequest = {
    name: string,
    threshold: Threshold
  }
  
export type LovingReponse ={
    items: Items
    threshold: Threshold
    length: number
    type: string
  }
