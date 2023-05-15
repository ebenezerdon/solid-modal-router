import { createSignal } from 'solid-js'
import styles from './App.module.css'

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = createSignal(false)

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen())
  }

  return (
    <div class={styles.Home}>
      <h1>Hello Motion One!</h1>
      <button class={styles.openButton} onClick={() => toggleModal()}>
        {modalIsOpen() ? 'Close Modal' : 'Open Modal'}
      </button>

      {modalIsOpen() && (
        <div class={styles.Modal}>
          <div>
            <h1>Hello World!</h1>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
