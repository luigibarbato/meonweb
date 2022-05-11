// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Systems from '../../../components/System';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Systems>
) {
  const response = await fetch("https://165zgyhu94.execute-api.us-east-1.amazonaws.com/dev/system");
  const json = await response.json()

  res.status(200).json([json]);
}
