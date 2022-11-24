import styled from 'styled-components'

export const PâtisserieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PâtisserieContent = styled.div`
  width: 70rem;
  background: ${(props) => props.theme['bg-main']};
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ProductsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 70rem;
  padding: 2rem;
`

export const PaginationButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;

  button {
    background-color: ${(props) => props.theme['Bg-header']};
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    border-radius: 50%;
    color: ${(props) => props.theme.White};

    font-family: 'Aleo';
    font-size: 1.2rem;
    font-weight: 700;

    :hover {
      cursor: pointer;
    }
  }`