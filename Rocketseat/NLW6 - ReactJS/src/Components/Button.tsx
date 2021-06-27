import { useState } from 'react'

interface ButtonProps {
  text?: string,
}

export const Button = (props: ButtonProps) => {
  const [counter,setCounter]  = useState(0)
  const increment = () =>{
  setCounter(counter+1)
  console.log(counter)
  }


  return (
    <button onClick={increment}>
      {  (counter>0) ? `voce clicou ${counter} vezes` : 'Clique aqui'} </button>
  )
}