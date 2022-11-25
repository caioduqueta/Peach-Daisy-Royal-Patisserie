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
  qtd: number
}

export function BuyingProducts({ id, image, altText, name, price, idInCart, qtd }: BuyingProductsProps) {
  const { removeFromCart, updateItemQtd } = useContext(ProductsContext)
  const [quantityOfThisProductInCart, setQuantityOfThisProductInCart] = useState(qtd)

  function HandleRemoveFromCart() {
    const CartId = idInCart
    removeFromCart(CartId)
  }

  function handleAddQuantityOfThisItemInCart() {
    const NewQuantity = quantityOfThisProductInCart + 1
    setQuantityOfThisProductInCart(NewQuantity)
    updateItemQtd(idInCart, NewQuantity)
  }

  function handleRemoveQuantityOfThisItemInCart() {
    if (quantityOfThisProductInCart >= 2) {
      const NewQuantity = quantityOfThisProductInCart - 1
      setQuantityOfThisProductInCart(quantityOfThisProductInCart - 1)
      updateItemQtd(idInCart, NewQuantity)
    }
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
          <span>{quantityOfThisProductInCart}</span>
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