// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"

export interface PostData {
  id: number
  userId: number
  title: string 
  body: string 
}

const getPosts = async () => {
  const response = await axios.get<PostData[]>('https://jsonplaceholder.typicode.com/posts')

  return response.data
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await getPosts()

  res.status(200).json(data)
}
