import db from '../db.json'
import { useRouter } from 'next/router'
import Widget from '../src/components/Widget'
import {
  QuizLogo,
  QuizBackground,
  QuizContainer
} from '../src/components/Quizzes'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import { Button, Input } from './../src/components/StartForm'

export default function Home() {
  const router = useRouter()
  const [name, setName] = React.useState('')
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <h2>{db.description}</h2>
            <br />
            <br />
            <form
              onSubmit={(infosDoEvento) => {
                infosDoEvento.preventDefault()
                router.push(`/quiz?name=${name}`)
              }}
            >
              <Input
                onChange={(infosDoEvento) => {
                  //console.log(infosDoEvento.target.value)
                  setName(infosDoEvento.target.value)
                }}
                placeholder="Insira seu Nome"
                value={name}
                name="Nome Do Usuario"
              />
              <Button type="submit" disabled={name.length === 0}>
                Play
              </Button>
              <br />
              <br />
              <label>Jogador: {db.player && name}</label>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>outros quizzes</Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/endersdev" />
    </QuizBackground>
  )
}
