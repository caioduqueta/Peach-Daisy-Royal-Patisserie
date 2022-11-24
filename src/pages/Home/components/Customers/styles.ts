import styled from 'styled-components'

export const CustomersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CustomersContent = styled.div`
  width: 70rem;
  background: ${(props) => props.theme['bg-main']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2.5rem;

`

export const Testimonial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
