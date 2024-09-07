import { useGlobalContext } from './Context'

const Form = () => {
  const { setText } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!e.target.text.value) {
      return
    }
    setText(e.target.text.value)
  }

  return (
    <section className="gallery-section">
      <h2>Unsplash Images</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" id="" placeholder="cat" />
        <button type="submit">submit</button>
      </form>
    </section>
  )
}
export default Form
