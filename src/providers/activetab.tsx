import {
  FC,
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react'

interface ActiveTabContextData {
  activeTab: string
  setActiveTab: Dispatch<SetStateAction<string>>
}

const ActiveTabContext = createContext<ActiveTabContextData>(
  {} as ActiveTabContextData,
)

export const ActiveTabProvider: FC = ({ children }) => {
  const [activeTab, setActiveTab] = useState('Delivery')

  return (
    <ActiveTabContext.Provider
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </ActiveTabContext.Provider>
  )
}

export const useActiveTab = (): ActiveTabContextData => {
  const context = useContext(ActiveTabContext)

  if (!context)
    throw new Error('useActiveTab must be used within a ActiveTabProvider.')

  return context
}
