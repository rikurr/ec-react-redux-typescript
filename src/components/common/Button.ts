import styled from 'styled-components'

const ProductButton = styled.button`
  background: ${p => p.theme.baseColor3};
  color: ${p => p.theme.subColor};
  padding: 10px 15px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin: 10px 0;
  :hover{
    opacity: 0.8;
  }
`

export {ProductButton}
