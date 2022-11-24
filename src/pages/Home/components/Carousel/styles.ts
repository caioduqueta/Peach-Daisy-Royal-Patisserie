import styled from 'styled-components'

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a{
    text-decoration: none;
  }

  button{
    color: ${props => props.theme["Bg-header"]};
    background: none;
    border: none;
    transition: all 0.2s;

    :hover{
      opacity: 0.6;
    }
  }

  button.left {
    margin-right: 2rem;
  }
  button.right {
    margin-left: 2rem;
  }
`

export const CarouselContent = styled.div`
  width: 70rem;
  background: ${(props) => props.theme['bg-main']};
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  flex: none;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none;
    appearance: none;
  }

  div.banners {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  img {
    width: 70rem;
    height: 38.75rem;
  }

  div.textOrder {
    position: absolute;
    margin-right: 30rem;
    margin-bottom: 20rem;
    backdrop-filter: blur(20px) opacity(30%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;

    strong {
      color: ${(props) => props.theme.White};
      text-shadow: 3px 3px ${(props) => props.theme.Black};

      font-family: 'Aleo', serif;
      font-size: 3rem;
      font-weight: bold;
      line-height: 130%;
    }

    button.order {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;

      color: ${(props) => props.theme.White};
      background: ${(props) => props.theme['Bg-header']};
      padding: 1rem;
      border-radius: 6px 36px;

      font-family: 'Aleo', serif;
      font-size: 2rem;
      font-weight: bold;
      line-height: 130%;

      :hover {
        color: ${(props) => props.theme.Golden};
        opacity: 1;
      }
    }
  }
`
