import {
  FC,
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react'

interface CartContextData {
  cart: any
  setCart: Dispatch<SetStateAction<any>>
}

interface CartProviderProps {
  children: ReactNode
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState()

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
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
