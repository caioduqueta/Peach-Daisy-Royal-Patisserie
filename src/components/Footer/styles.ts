import styled from "styled-components";
 
export const FooterContainer = styled.footer`
margin-top: 4rem;
`

export const ByDuqueta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.byDuqueta};

  a {
    text-decoration: none;
    p {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      color: ${(props) => props.theme.White};
      text-decoration: none;
    }
  }
`