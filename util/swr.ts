type FetchArgs = [input: RequestInfo, init?: RequestInit]
export const fetcher = (...args: FetchArgs) => fetch(...args).then(res => res.json())