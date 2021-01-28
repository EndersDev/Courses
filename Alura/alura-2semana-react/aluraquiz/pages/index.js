import styled from 'styled-components'
import db from '../db.json'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

//const BackGroundImage = styled.div`
//  background-image: url(${db.bg});
//`

export default function Home() {
  return <div style={{ backgroundImage: `url(${db.bg})` }}>ola</div>
}
