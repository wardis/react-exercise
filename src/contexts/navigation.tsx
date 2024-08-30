import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react'

const NavigationContext = createContext<null | {
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
}>(null)

export function NavigationContextProvider({ children }: PropsWithChildren) {
  const [selected, setSelected] = useState('')

  return (
    <NavigationContext.Provider value={{ selected, setSelected }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error('useNavigation must be used within a AlertProvider')
  }
  return context
}
