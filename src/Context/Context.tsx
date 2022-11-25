import { createContext, ReactNode, useState } from 'react'

export interface IItensInCart{
  id: number
  image: string
  name: string
  altText: string
  price: number
  idInCart: string
  qtd: number
}

interface IProductsContext {
  itensInCart: IItensInCart[]
  addInCart: (item: IItensInCart) => void
  removeFromCart: (CartId: string) => void
  updateItemQtd: (idInCart: string, NewQuantity: number) => void
}

interface ProductsProviderProps{
children: ReactNode
}

export const ProductsContext = createContext({} as IProductsContext)

export function ProductsProvider({ children }: ProductsProviderProps) {

  const [itensInCart, setItensInCart] = useState<IItensInCart[]>([])
 
  function addInCart(item:IItensInCart) {
    setItensInCart([...itensInCart, item])
  }

  function removeFromCart(CartId: string ) {
    const itensInCartWithoutRemovedOne = itensInCart.filter(
      (item) => CartId !== item.idInCart)
    setItensInCart(itensInCartWithoutRemovedOne)
  }

  function updateItemQtd(idInCart: string, NewQuantity: number) {
  const NewOrder = []
    for (let item of itensInCart) {
      if (item.idInCart === idInCart) {
      item.qtd = NewQuantity
      NewOrder.push(item)
    } else {
      NewOrder.push(item)
    }
  }
  setItensInCart(NewOrder)
  }

  return (
    <ProductsContext.Provider
      value={{
        itensInCart,
        addInCart,
        removeFromCart,
        updateItemQtd
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}