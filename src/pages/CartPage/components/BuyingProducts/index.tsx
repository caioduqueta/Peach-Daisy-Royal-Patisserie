import { CoinVertical, PlusCircle, MinusCircle, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { ProductsContext } from "../../../../Context/Context";
import { BuyingProductsContainer, Infos, QuantityButtons, TrashButton } from "./styles";

interface BuyingProductsProps{
  id: number
  image: string
  altText: string
  name: string
  price: number
  idInCart: string
}

export function BuyingProducts({ id, image, altText, name, price,idInCart }: BuyingProductsProps) {
  const { removeFromCart } = useContext(ProductsContext)
  const [quantityOfThisItemInCart, setQuantityOfThisItemInCart] = useState(1)

  function HandleRemoveFromCart() {
    const CartId = idInCart
    removeFromCart(CartId)
  }

  function handleAddQuantityOfThisItemInCart() {
    setQuantityOfThisItemInCart(quantityOfThisItemInCart + 1)
  }

  function handleRemoveQuantityOfThisItemInCart() {
    if (quantityOfThisItemInCart >= 2) setQuantityOfThisItemInCart(quantityOfThisItemInCart - 1)
  }

  return (
    <BuyingProductsContainer>
      <img src={image} alt={altText} />
      <Infos>
        <strong>{name}</strong>
        <div className="price">
          <CoinVertical weight="fill" size={44} />
          <span>{price} coins</span>
        </div>
      </Infos>
      <QuantityButtons>
        <div className="quantity">
          <button className="quantityIcon" onClick={handleAddQuantityOfThisItemInCart}>
            <PlusCircle weight="fill" size={48} alt="Plus" />
          </button>
          <span>{quantityOfThisItemInCart}</span>
          <button className="quantityIcon" onClick={handleRemoveQuantityOfThisItemInCart}>
            <MinusCircle weight="fill" size={48} alt="Minus" />
          </button>
        </div>
      </QuantityButtons>
      <TrashButton>
        <button className="trashIcon" onClick={HandleRemoveFromCart}>
          <Trash weight="fill" size={32} alt="Trash" />
        </button>
      </TrashButton>
    </BuyingProductsContainer>
  )
}