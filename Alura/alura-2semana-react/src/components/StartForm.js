import { useRouter } from 'next/router'

export default function StartForm() {
  const router = useRouter()
  const [name, setName] = React.useState('Player1')

  return (
    <form
      onSubmit={(infosDoEvento) => {
        infosDoEvento.preventDefault()
        router.push(`/quiz?name=${name}`)
        console.log('Fazendo uma submissão por meio do react')
      }}
    >
      <input
        onChange={(infosDoEvento) => {
          console.log(infosDoEvento.target.value)
          setName(infosDoEvento.target.value)
        }}
        placeholder="Diz ai seu nome"
      />
      <button type="submit" disabled={name.length === 0}>
        <h1>Play</h1>
      </button>
      <br />
      <label>Jogador: {name}</label>
    </form>
  )
}
