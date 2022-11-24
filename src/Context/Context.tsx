import { createContext, ReactNode, useState } from 'react'

export interface IItensInCart{
  id: number
  image: string
  name: string
  altText: string
  price: number
  idInCart: string
}

interface IProductsContext {
  itensInCart: IItensInCart[]
  addInCart: (item: IItensInCart) => void
  removeFromCart: (CartId: string) => void

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

  return (
    <ProductsContext.Provider
      value={{
        itensInCart,
        addInCart,
        removeFromCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}