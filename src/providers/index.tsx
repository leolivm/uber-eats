import { FC, ReactNode } from 'react'
import { ActiveTabProvider } from './activetab'
import { CartProvider } from './cart'

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => (
  <CartProvider>
    <ActiveTabProvider>{children}</ActiveTabProvider>
  </CartProvider>
)
