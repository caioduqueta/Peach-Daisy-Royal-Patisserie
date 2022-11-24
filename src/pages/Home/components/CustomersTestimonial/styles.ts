import styled from 'styled-components'

export const CustomersTestimonialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 3rem 0;
  `
  export const CustomersTestimonialContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 16rem;
    width: 50rem;
    background: ${(props) => props.theme['Bg-header']};
    box-shadow: 0 1px 10px rgba(255, 255, 255, 1);
    border-radius: 16px;

    img {
      border-radius: 16px;
      border: 10px solid ${(props) => props.theme['Bg-header']};
      height: 20rem;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme.White};
      width: 20rem; 

      p {
        font-family: 'Aleo', serif;
        font-size: 2.5rem;
        font-weight: medium;
        line-height: 130%;
      }

      span {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: medium;
        line-height: 130%;
        padding-top: 1rem;
      }
    }
  `
