import { FaSun } from 'react-icons/fa6'
import { FaMoon } from 'react-icons/fa6'
import { useGlobalContext } from './Context'

const Toggle = () => {
  const { darkTheme, setDarkTheme } = useGlobalContext()

  return (
    <section className="toggle-container">
      <button onClick={() => setDarkTheme(!darkTheme)}>
        {darkTheme ? <FaSun /> : <FaMoon />}
      </button>
    </section>
  )
}
export default Toggle
