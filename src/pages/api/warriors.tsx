// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {NextApiRequest, NextApiResponse} from 'next'
import apiText from '../../DB/api'
import { people } from '../../DB/data'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  const {query: { id }} = req
  const idFind = parseInt(id as string, 10)
  const filtered = apiText.filter((p) => p.id === idFind)
  // res.statusCode = 200
  // res.json(filtered)

  if (filtered.length > 0) {
    res.status(200).json(filtered)
  } else {
    res.status(200).json(apiText)
  }
}
// export default (req: NextApiRequest, res: NextApiResponse) => {
//   const { id } = req.query
//   const idFind = parseInt(id, 10)
//   res.statusCode = 200
//   res.json(apiText.find(id))
// }
