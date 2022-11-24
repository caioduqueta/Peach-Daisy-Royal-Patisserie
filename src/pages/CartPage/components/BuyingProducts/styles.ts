import styled from 'styled-components'

export const BuyingProductsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  height: auto;
  padding: 2rem;
  gap: 1rem;
  position: relative;

  ::after {
    position: absolute;
    content: '';
    top: 19rem;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme['Black']};
  }

  img {
    width: 15rem;
    border-radius: 6px;
  }

  strong {
    font-family: 'Poppins', sans-serif;
    font-size: 1.45rem;
    font-weight: 500;
    line-height: 130%;
    color: ${(props) => props.theme.Black};
    padding: 1rem 1rem;
    margin-top: 0.75rem;
  }
`
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 25rem;
  padding-top: 0.5rem;

  strong {
    font-family: 'Poppins', sans-serif;
    font-size: 1.9rem;
    font-weight: 500;
    line-height: 130%;
    color: ${(props) => props.theme.Black};
    padding: 1rem 2rem;
    margin-top: 0.75rem;
  }

  div.price {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 1rem;
    padding: 1rem 2rem;

    color: ${(props) => props.theme.Black};
    span {
      font-family: 'Aleo', serif;
      font-size: 2rem;
      font-weight: 400;
      line-height: 130%;
      color: ${(props) => props.theme.Black};
    }
  }
`

export const QuantityButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div.quantity {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2.5rem 2rem 2rem 2rem;

    button.quantityIcon {
      background-color: transparent;
      border: none;
      color: ${(props) => props.theme['Bg-header']};
      transition: all 0.2s;

      :hover {
        color: ${(props) => props.theme.White};
        cursor: pointer;
      }
    }

    span {
      font-family: 'Aleo', serif;
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 130%;
      color: ${(props) => props.theme.Black};
    }
  }
`

export const TrashButton = styled.div`
  button.trashIcon {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme['Bg-header']};
    transition: all 0.2s;

    :hover {
      color: ${(props) => props.theme.White};
      cursor: pointer;
    }
  }
`
