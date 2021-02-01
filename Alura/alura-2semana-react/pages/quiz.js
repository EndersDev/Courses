import db from '../db.json'
import Widget from '../src/components/Widget'
import {
  QuizLogo,
  QuizBackground,
  QuizContainer
} from '../src/components/Quizzes'
import { Button } from '../src/components/StartForm'
import shimmer from '../src/components/ShimmerComponents'

/*TESTAR USAR OS PARAMETROS DO CHILDREN COMPONENT QUESTIONWIDGET*/

//Shimmer
function Shimmer() {
  return (
    <Widget className="wrapper">
      <Widget.Header>
        <shimmer.Line className="comment br animate"></shimmer.Line>
      </Widget.Header>
      <shimmer.IMG className="comment br animate" />
      <Widget.Content>
        <shimmer.Line className="comment br animate"></shimmer.Line>
        <shimmer.Parag className="comment br animate"></shimmer.Parag>
        <form>
          <shimmer.Alter className="comment br animate">
            <shimmer.Line className="comment br animate"></shimmer.Line>
          </shimmer.Alter>
          <shimmer.Alter className="comment br animate">
            <shimmer.Line className="comment br animate"></shimmer.Line>
          </shimmer.Alter>
          <shimmer.Alter className="comment br animate">
            <shimmer.Line className="comment br animate"></shimmer.Line>
          </shimmer.Alter>
          <shimmer.Alter className="comment br animate">
            <shimmer.Line className="comment br animate"></shimmer.Line>
          </shimmer.Alter>
          <shimmer.But className="comment br animate">
            <shimmer.Line className="comment br animate"></shimmer.Line>
          </shimmer.But>
        </form>
      </Widget.Content>
    </Widget>
  )
}

//tela carregamento
function LoadingWidget({ ...props }) {
  const style = { width: '100%', height: '150px', objectFit: 'cover' }

  const { txt_h_carregamento, txt_p_carregamento } = [
    'just text',
    'question id something'
  ]

  const carregamento = {
    question: 'qualquer pergunta',
    alternatives: [
      txt_h_carregamento,
      txt_h_carregamento,
      txt_h_carregamento,
      txt_h_carregamento
    ]
  }

  const { question, alternatives } = carregamento
  return (
    <Widget>
      <Widget.Header>
        <h3>{txt_h_carregamento}</h3>
      </Widget.Header>
      <img
        alt="Imagem de Carregamento"
        style={{ objectfit: 'cover' }}
        src="/"
      />
      <Widget.Content>
        <h2>{txt_h_carregamento}</h2>
        <p>{txt_p_carregamento}</p>
        <form>
          {alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`
            return (
              <Widget.Topic as="label" htmlFor={alternativeId}>
                <input id={alternativeId} name={question} type="radio" />
                {alternative}
              </Widget.Topic>
            )
          })}
          <Button type="submit">{txt_h_carregamento}</Button>
        </form>
      </Widget.Content>
    </Widget>
  )
}

//questoes
function QuestionWidget({ question, questionIndex, totalQuestions, onSubmit }) {
  const questionId = `question__${questionIndex}`
  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" /> */}
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover'
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            onSubmit() //isso vem da props
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`
            return (
              <Widget.Topic as="label" htmlFor={alternativeId}>
                <input
                  // style={{ display: 'none' }}//do i want this?
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            )
          })}
          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */
          /*what??*/}
          <Button type="submit">Confirmar</Button>
        </form>
      </Widget.Content>
    </Widget>
  )
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT'
}

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING)
  const totalQuestions = db.questions.length
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const questionIndex = currentQuestion
  const question = db.questions[questionIndex]

  /* // TESTANDO LOADING PAGE
  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ)
    }, 1 * 1000)
  }, []) */

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion)
    } else {
      setScreenState(screenStates.RESULT)
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
          />
        )}
        {screenState === screenStates.LOADING && <Shimmer />}
        {screenState === screenStates.RESULT && (
          <div>Você acertou X questões, parabéns!</div>
        )}
      </QuizContainer>
    </QuizBackground>
  )
}
