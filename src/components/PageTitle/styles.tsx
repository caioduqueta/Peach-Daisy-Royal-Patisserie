import styled from "styled-components";


export const PageTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;

  h1 {
    font-family: 'Aleo', 'serif';
    font-weight: bold;
    font-size: 4rem;
    line-height: 130%;
    color: ${(props) => props.theme['Bg-header']};
  }
`
export const StarsIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.theme["Bg-header"]};
`