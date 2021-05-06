import useSWR from 'swr'

type FetchArgs = [input: RequestInfo, init?: RequestInit]

export async function fetcher<T> (...args: FetchArgs): Promise<T> {
  return await fetch(...args).then(async res => await res.json() as T)
}

export { useSWR }
