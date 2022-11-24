import styled from 'styled-components'
import MarioCursor from "../../../../assets/MarioCursor.png"

export const LocationsInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  h2 {
    font-family: 'Aleo', serif;
    font-size: 2rem;
    font-weight: 600;
    line-height: 130%;
    color: ${(props) => props.theme.Black};

    margin-bottom: 2rem;
  }

  img {
    border-radius: 36px;
    filter: sepia(0%);
    cursor: url(${MarioCursor}), auto;
    position: relative;
    transition: all 0.4s;
  }

  :hover {
    img {
      filter: sepia(50%);
    }
  }
`


