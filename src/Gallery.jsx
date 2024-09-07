import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useGlobalContext } from './Context'

const Gallery = () => {
  const { text } = useGlobalContext()
  const { data, isLoading } = useQuery({
    queryKey: ['images', text],
    queryFn: () =>
      axios.get(
        `https://api.unsplash.com/search/photos/?client_id=uTqUjRz0EwSq9kfSEThYptbpPMDYEdhSCLjH8Xc6_xw&query=${text}`
      ),
  })

  if (isLoading) {
    return (
      <section className="gallery-container">
        <h2>Loading...</h2>
      </section>
    )
  }

  if (data.data.results.length === 0) {
    return (
      <section className="gallery-container">
        <h3>No Results Found...</h3>
      </section>
    )
  }
  const { results } = data.data
  return (
    <section className="gallery-container">
      {results.map((item) => {
        const image = item?.urls?.regular
        return <img src={image} key={item.id} alt={item.alt_description} />
      })}
    </section>
  )
}
export default Gallery
