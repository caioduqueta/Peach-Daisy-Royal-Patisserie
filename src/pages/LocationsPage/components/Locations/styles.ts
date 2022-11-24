import styled from 'styled-components'

export const LocationsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LocationsContent = styled.div`
  width: 70rem;
  background: ${(props) => props.theme['bg-main']};
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
