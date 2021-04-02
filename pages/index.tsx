import { lighten } from "polished";
import Head from "next/head";
import React, { FC } from "react";

import { PostData } from "~pages/api/posts";
import theme, { styled } from "~styles";
import useSWR from "swr";
import { fetcher } from "~util/swr";

const Post = styled.div`
  box-shadow: 0px 0px 6px 2px #e6e6e6;

  .dark & {
    box-shadow: 0px 0px 6px 2px ${lighten(0.2, theme.color.negative)};
  }
`;

const Home: FC = () => {
  const { data, error } = useSWR<PostData[]>("/api/posts", fetcher);
  const isLoading = !data && !error;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Posts</h1>
        {isLoading ? (
          <span>Loading posts...</span>
        ) : (
          data?.map((d, ix) => (
            <Post key={ix}>
              <h3>{d.title}</h3>
              <p>{d.body}</p>
            </Post>
          ))
        )}
        <div>{JSON.stringify(data)}</div>
      </main>
    </div>
  );
};

export default Home;
