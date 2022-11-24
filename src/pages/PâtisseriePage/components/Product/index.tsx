import { ProductContainer, ProductInfo, ProductPhoto } from "./styles";
import { CoinVertical } from "phosphor-react";
import { useContext, useState } from "react";
import { ProductsContext } from "../../../../Context/Context";
import { v4 as uuidv4 } from 'uuid'
  import { toast } from 'react-toastify'


interface ProductProps {
  id: number
  image: string
  name: string
  altText: string
  price: number
}

export function Product({ id, image, name, altText, price }: ProductProps) {
  
  const { addInCart } = useContext(ProductsContext)
  
  function notify(){
    toast(`${name} has been added to your cart`)
  }
  
  function handleAddInCart() {
    const item = { id, image, name, altText, price, idInCart: uuidv4() }
    addInCart(item)
    notify()
  }

  return (
    <ProductContainer>
      <ProductPhoto className="photo" onClick={handleAddInCart}>
        <img src={image} alt={altText} />
        <button>Add to cart</button>
      </ProductPhoto>
      <ProductInfo>
        <strong>{name}</strong>
        <div className="price">
          <CoinVertical weight="fill" size={32} />
          <span>{price} coins</span>
        </div>
      </ProductInfo>
    </ProductContainer>
  )
}