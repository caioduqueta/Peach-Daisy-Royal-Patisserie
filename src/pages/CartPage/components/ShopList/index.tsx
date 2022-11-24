import {BuyingTotal, ProductsPrice, Shipping, ShopListContainer, ShopListContent, TotalPrice} from './styles'
import { CoinVertical, MinusCircle, Percent, PlusCircle, Trash } from 'phosphor-react'
import { BuyingProducts } from '../BuyingProducts'
import { useContext, useState } from 'react'
import { ProductsContext } from '../../../../Context/Context'

export function ShopList() {

  const { itensInCart } = useContext(ProductsContext)
  

  return (
    <ShopListContainer>
      <ShopListContent>
        {itensInCart.map((item) => {
          return (<BuyingProducts
            key={item.idInCart}
            id={item.id}
            image={item.image}
            altText={item.altText}
            name={item.name}
            price={item.price}
            idInCart={item.idInCart}
          />
          )
        })}
        <BuyingTotal>
          <ProductsPrice>
            <p>Original Price:</p>
            <div>
              <CoinVertical weight="fill" size={24} />
              <span>1000 coins</span>
            </div>
          </ProductsPrice>
          <Shipping>
            <p>Shipping:</p>
            <div>
              <CoinVertical weight="fill" size={24} />
              <span>-50 coins</span>
            </div>
          </Shipping>
          <TotalPrice>
            <p>Total Price:</p>
            <div>
              <CoinVertical weight="fill" size={24} />
              <span>950 coins</span>
            </div>
          </TotalPrice>
        </BuyingTotal>
      </ShopListContent>
    </ShopListContainer>
  )
}

