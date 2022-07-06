import React from 'react'
import { ActiveTabProvider } from './activetab'

export const AppProvider: React.FC = ({ children }) => (
  <ActiveTabProvider>{children}</ActiveTabProvider>
)
