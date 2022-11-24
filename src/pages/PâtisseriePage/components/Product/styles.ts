import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;

  :hover {
    div.photo button {
      visibility: visible;
      animation: addToCartAnimation 0.5s ease-in-out;
    }
    strong {
      color: ${(props) => props.theme['Bg-header']};
    }
  }
  @keyframes addToCartAnimation {
    0% {
      opacity: 0;
      transform: scale(0);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`

export const ProductPhoto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 20rem;
    width: 20rem;
    position: relative;
  }

  button {
    display: inline;
    position: absolute;
    top: 1;
    left: 1;
    margin: 15.5rem 0 0 10rem;
    padding: 1rem;

    background: ${(props) => props.theme["Bg-header"]};
    color: ${(props) => props.theme.White};
    border-radius: 6px;
    border: none;

    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    cursor: pointer;
    
    visibility: hidden;
  }
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  strong {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 130%;
    color: ${(props) => props.theme.Black};
  }

  div.price {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.25rem;

    color: ${(props) => props.theme.Golden};
    span {
      font-family: 'Aleo', serif;
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 130%;
      color: ${(props) => props.theme.Black};
    }
  }
`