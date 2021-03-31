import { lighten } from 'polished'
import { GetServerSideProps } from "next"
import Head from 'next/head'
import React, { FC } from "react"

import { getPosts, PostData } from '~pages/api/posts'
import theme, { styled } from "~styles"

interface Props {
  data: PostData[]
}

const Post = styled.div`
  box-shadow: 0px 0px 6px 2px #e6e6e6;

  .dark & {
    box-shadow: 0px 0px 6px 2px ${lighten(0.2, theme.color.negative)};
  }
`

const Home: FC<Props> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Posts</h1>
        {data.map((d, ix) => (
          <Post key={ix}>
            <h3>{d.title}</h3>
            <p>{d.body}</p>
          </Post>
        ))}
        <div>{JSON.stringify(data)}</div>
      </main>
    </div>
  )
}

export default Home

export const getStaticProps: GetServerSideProps= async (context) => {
  const data = await getPosts()

  return {
    props: { data }
  }
}