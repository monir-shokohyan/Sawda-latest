import { useState, useEffect } from 'react'
import { api } from '../axios-instance'

function useFetch(url: string) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await api.get(url)
        setData(response.data)
      } catch (err) {
        setError(err as any)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, isLoading, error }
}

export { useFetch }
