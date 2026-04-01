import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const API_BASE_URL = "https://anidaku-api.vercel.app/api/v2/hianime"

const fetchData2 = async (url) => {
  try {
    const { data } = await axios.get(API_BASE_URL + url)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
export const useApi2 = (endpoint) => {
  return useQuery({
    queryKey: [endpoint],
    queryFn: () => fetchData2(endpoint),
    retry: 2,
    enabled: !!endpoint,
    refetchOnWindowFocus: false,
  })
}
