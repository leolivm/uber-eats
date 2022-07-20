import { FC, createContext, useState, useContext, ReactNode } from 'react'

import { CartType } from '../types'

interface CartContextData {
  cart: CartType | undefined
  addToCart: (item: CartType, checkBox: boolean) => void
}

interface CartProviderProps {
  children: ReactNode
}

const CartContext = createContext<CartContextData>({} as CartContextData)

const initialState = {
  items: [],
  restaurantName: '',
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartType>(initialState)

  const addToCart = (item: CartType, checkBox: boolean) => {
    const { items, restaurantName } = item
    const objItem = items.find((p) => p)

    if (checkBox) {
      setCart(() => ({
        items: [...cart.items, objItem],
        restaurantName,
      }))
    } else {
      setCart(() => ({
        items: [...cart.items.filter((c) => c?.title !== objItem?.title)],
        restaurantName,
      }))
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = (): CartContextData => {
  const context = useContext(CartContext)

  if (!context) throw new Error('useCart must be used within a CartProvider')

  return context
}
