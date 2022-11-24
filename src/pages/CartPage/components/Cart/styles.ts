import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CartContent = styled.div`
  width: 70rem;
  background: ${(props) => props.theme['bg-main']};
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`