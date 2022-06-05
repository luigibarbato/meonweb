// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { count } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next'
import LovingItems from '../../../components/Loving';

export type Threshold = {
  start: number,
  end: number,
}

export type LovingRequest = {
  name: string,
  threshold: Threshold
}

export type LovingReponse ={
  items: LovingItems
  threshold: Threshold
  length: number
  type: string
}

export async function getLovingItems(lr:LovingRequest): Promise<LovingReponse>{
  var response,respJSON:LovingReponse

  respJSON = {items: [], threshold: {start:0,end:0}, length: 0, type: ''}

  switch(lr.name){
    case "music":{
      response = await fetch("https://z5nu7io9fc.execute-api.us-east-1.amazonaws.com/dev/FavoriteTracks");
      let tracksJSON = await response.json()
      respJSON = {
        items: tracksJSON.slice(lr.threshold.start, lr.threshold.end),
        threshold: lr.threshold,
        length: tracksJSON.length,
        type: 'music'
      }
      break;
    }
    case "movies":{
        response = await fetch("http://127.0.0.1:8080/api/movies");
        let filmJSON = await response.json()
            
        console.log(filmJSON)
      
        respJSON = {
          items: filmJSON.items.slice(lr.threshold.start, lr.threshold.end),
          threshold: lr.threshold,
          length: filmJSON.size,
          type: 'movies'
        }
      break;

    }
    case "book":{
      response = await fetch("http://127.0.0.1:8080/api/books");
     
      let bookJSON = await response.json()
     
      console.log(bookJSON)
     
      respJSON = {
        items: bookJSON.items.slice(lr.threshold.start, lr.threshold.end),
        threshold: lr.threshold,
        length: bookJSON.size,
        type: 'books'
      }
      break;
    }
}

return respJSON

}

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<TracksReponse>
// ) {
//   const response = await fetch("https://z5nu7io9fc.execute-api.us-east-1.amazonaws.com/dev/FavoriteTracks");
//   const tracksJSON = await response.json()


//   let tracksResp = {
//     tracks: tracksJSON.slice,
//     threshold: tracksJSON.threshold
//   }


//   res.status(200).json(tracksResp);
// }
