import { PageTitle } from "../../../../components/PageTitle"
import { ShopList } from "../ShopList"
import { CartContainer, CartContent } from "./styles"


export function Cart() {
  return (
    
      <CartContainer>
        <CartContent>
        <PageTitle text="Your Cart" />
        <ShopList/>
        </CartContent>
      </CartContainer>
  
  )
}
