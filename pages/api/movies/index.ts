// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { count } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next'
import Tracks from '../../../components/Tracks';

export type Threshold = {
  start: number,
  end: number,
}

export type TracksReponse ={
  tracks: Tracks
  threshold: Threshold
  length: number
}

export async function getMovies(threshold: Threshold): Promise<TracksReponse>{
  const response = await fetch("https://z5nu7io9fc.execute-api.us-east-1.amazonaws.com/dev/FavoriteTracks");
  const tracksJSON = await response.json()


  let tracksResp:TracksReponse = {
    tracks: tracksJSON.slice(threshold.start, threshold.end),
    threshold: threshold,
    length: tracksJSON.length,
  }

   return tracksResp
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
