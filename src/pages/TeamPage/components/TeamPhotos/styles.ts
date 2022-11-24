import styled from 'styled-components'

export const TeamPhotosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;

  img {
    width: 25rem;
    height: 25rem;
  }

  div.infos {
    display: none;
    h2 {
      font-family: 'Aleo', 'serif';
      font-weight: 400;
      font-size: 4rem;
      line-height: 130%;
      color: ${(props) => props.theme.Black};
    }

    p {
      max-width: 40.625rem;

      font-family: 'Aleo', 'serif';
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 130%;
      color: ${(props) => props.theme.Black};
    }
  }

  :hover {
    div.infos {
      display: block;
      animation: PhotoAnimation 0.75s;
    }
  }

  @keyframes PhotoAnimation {
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
