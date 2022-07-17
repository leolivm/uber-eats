import { FC } from 'react'
import { ActiveTabProvider } from './activetab'

export const AppProvider: FC = ({ children }) => (
  <ActiveTabProvider>{children}</ActiveTabProvider>
)
