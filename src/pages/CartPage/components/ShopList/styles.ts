import styled from 'styled-components'


export const ShopListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  `

export const ShopListContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${(props) => props.theme['box-pagination']};
  width: 60rem;
  min-height: 2rem;

  border-radius: 36px;
  `

export const BuyingTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
  gap: 0.5rem;
  padding: 1rem;
`

export const ProductsPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: auto;

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 130%;
    color: ${(props) => props.theme.Black};
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    color: ${(props) => props.theme.Black};
    gap: 1rem;
    width: 8rem;

    span {
      color: ${(props) => props.theme.Black};
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      font-weight: 500;
      line-height: 130%;
    }
  }
`

  export const Shipping = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: auto;

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 130%;
    color: ${(props) => props.theme.Black};
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    color: ${(props) => props.theme.Black};
    gap: 1rem;
    width: 8rem;

    span {
      color: ${(props) => props.theme.Black};
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      font-weight: 500;
      line-height: 130%;
    }
  }
`

 export const TotalPrice = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   width: 100%;
   height: auto;
   padding: 1rem 0;
   position: relative;

   ::after {
     position: absolute;
     content: '';
     top: 0;
     left: -1rem;
     width: 100%;
     height: 1px;
     padding: 0 1rem;
     background-color: ${(props) => props.theme['Black']};
   }

   p {
     font-family: 'Poppins', sans-serif;
     font-size: 1rem;
     font-weight: 500;
     line-height: 130%;
     color: ${(props) => props.theme.Black};
   }

   div {
     display: flex;
     justify-content: flex-start;
     align-items: flex-end;
     color: ${(props) => props.theme.Black};
     gap: 1rem;
     width: 8rem;

     span {
       color: ${(props) => props.theme.Black};
       font-family: 'Poppins', sans-serif;
       font-size: 1rem;
       font-weight: 500;
       line-height: 130%;
     }
   }
 `