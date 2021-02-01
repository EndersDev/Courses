import styled from 'styled-components'

const Alter = styled.div`
  height: 39px;
  width: 284px;
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;
  display: block;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`

const Line = styled.div`
  height: 20px;
  margin-top: 10px;
  width: 120px;
  max-width: 200px;
`

const Parag = styled.div`
  width: 284px;
  height: 40px;
`

const IMG = styled.div`
  display: block !important;
  max-width: 400px;
  max-height: 400px;
  margin-top: 15px;
  width: 100%;
  height: 120px;
`

const But = styled.button`
  height: 39px;
  width: 284px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: 0.3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`
const Loading = styled.div``

Loading.Alter = () => {
  return <Alter className="shine" />
}
Loading.Line = () => {
  return <Line className="shine" />
}
Loading.Parag = () => {
  return <Parag className="shine" />
}
Loading.Img = () => {
  return <IMG className="shine" />
}
Loading.Button = () => {
  return <But className="shine" />
}
export default Loading
