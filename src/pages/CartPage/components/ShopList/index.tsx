import {BuyingTotal, FinishButton, ProductsPrice, Shipping, ShopListContainer, ShopListContent, TotalPrice} from './styles'
import { CoinVertical } from 'phosphor-react'
import { BuyingProducts } from '../BuyingProducts'
import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../../../Context/Context'

export function ShopList() {

  const { itensInCart } = useContext(ProductsContext)
  const [originalPrice, setOriginalPrice] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  
  function discoverOriginalPrice() {
    let TotalOriginalPrice = 0
    itensInCart.forEach((item) => {
      TotalOriginalPrice += item.price * item.qtd
    })
    setOriginalPrice(TotalOriginalPrice)
    setTotalPrice(TotalOriginalPrice + 50)
  }
  
  useEffect(() => {
    discoverOriginalPrice()
  }, [itensInCart])

  return (
    <ShopListContainer>
      <ShopListContent>
        {itensInCart.map((item) => {
          return (
            <BuyingProducts
              key={item.idInCart}
              id={item.id}
              image={item.image}
              altText={item.altText}
              name={item.name}
              price={item.price}
              idInCart={item.idInCart}
              qtd={item.qtd}
            />
          )
        })}
        <BuyingTotal>
          <ProductsPrice>
            <p>Original Price:</p>
            <div>
              <CoinVertical weight="fill" size={24} />
              <span>{originalPrice} coins</span>
            </div>
          </ProductsPrice>
          <Shipping>
            <p>Shipping:</p>
            <div>
              <CoinVertical weight="fill" size={24} />
              <span>50 coins</span>
            </div>
          </Shipping>
          <TotalPrice>
            <p>Total Price:</p>
            <div>
              <CoinVertical weight="fill" size={24} />
              <span>{totalPrice} coins</span>
            </div>
          </TotalPrice>
        </BuyingTotal>
      </ShopListContent>
      <FinishButton>
        <span>Finish Order</span>
      </FinishButton>
    </ShopListContainer>
  )
}

