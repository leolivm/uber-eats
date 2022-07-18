import { FC, ReactNode } from 'react'
import { ActiveTabProvider } from './activetab'

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => (
  <ActiveTabProvider>{children}</ActiveTabProvider>
)
