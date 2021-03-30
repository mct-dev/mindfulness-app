import { GetServerSideProps } from "next"
import Head from 'next/head'
import { FC } from "react"

import { getPosts, PostData } from '~pages/api/posts'
import styles from '../styles/Home.module.css'

interface Props {
  data: PostData[]
}

const Home: FC<Props> = ({ data }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Posts</h1>
        {data.map(d => (
          <div>
            <h3>{d.title}</h3>
            <p>{d.body}</p>
          </div>
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