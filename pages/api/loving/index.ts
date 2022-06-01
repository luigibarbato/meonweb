// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { count } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next'
import LovingItems from '../../../components/Loving';

export type Threshold = {
  start: number,
  end: number,
}

export type LovingReponse ={
  items: LovingItems
  threshold: Threshold
  length: number
}

export async function getLovingItems(kind:string, threshold: Threshold): Promise<LovingReponse>{
  var response,respJSON:LovingReponse

  respJSON = {items: [], threshold: threshold, length: 0}

  switch(kind){
    case "music":{
      response = await fetch("https://z5nu7io9fc.execute-api.us-east-1.amazonaws.com/dev/FavoriteTracks");
      let tracksJSON = await response.json()
      respJSON = {
        items: tracksJSON.slice(threshold.start, threshold.end),
        threshold: threshold,
        length: tracksJSON.length,
      }
      break;
    }
    case "movies":{
        response = await fetch("http://127.0.0.1:8080/api/movies");
        let filmJSON = await response.json()
            
        console.log(filmJSON)
      
        respJSON = {
          items: filmJSON.items.slice(threshold.start, threshold.end),
          threshold: threshold,
          length: filmJSON.size,
        }
      break;

    }
    case "book":{
      response = await fetch("http://127.0.0.1:8080/api/books");
     
      let bookJSON = await response.json()
     
      console.log(bookJSON)
     
      respJSON = {
        items: bookJSON.items.slice(threshold.start, threshold.end),
        threshold: threshold,
        length: bookJSON.size,
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
