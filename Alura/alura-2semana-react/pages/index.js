import styled from 'styled-components'
import db from '../db.json'
import { Widget } from './../src/components/Widget'

const BackGroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`
const QuizContainer = styled.section`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    <BackGroundImage>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Quizz Calculo</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Quizz Pizza, Quizz salada</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Confira outros Quizz</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Quizz Pizza, Quizz salada</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </BackGroundImage>
  )
}
