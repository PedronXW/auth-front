import { ReactNode, createContext, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

interface InputRootInterface {
  id: string
  initialVisibility?: boolean
  children: ReactNode
  errors?: any
}

interface InputContextInterface {
  id: string
  visibility: boolean
  changeVisibility: (visibility: boolean) => void
}

export const InputContext = createContext({} as InputContextInterface)

const InputRoot = ({
  id,
  children,
  initialVisibility = true,
}: InputRootInterface) => {
  const [visibility, setVisibility] = useState(initialVisibility)

  const {
    setFocus,
    formState: { errors },
    getFieldState,
  } = useFormContext()

  const [isFocused, setIsFocused] = useState(false)

  const [borderColor, setBorderColor] = useState('gray-400')

  useEffect(() => {
    setBorderColor('gray-400')
    if (errors[id] !== undefined) {
      console.log(errors)
      setBorderColor(() => {
        return 'red-400'
      })
    }
    if (isFocused) {
      setBorderColor('black')
    }
  }, [errors, isFocused])

  return (
    <InputContext.Provider
      value={{
        visibility,
        changeVisibility: setVisibility,
        id,
      }}
    >
      <div
        className={`w-full cursor-pointer p-3 flex items-center border-b-${borderColor} border-b-2 grow-1`}
        onClick={() => {
          setFocus(id)
          setIsFocused(true)
        }}
        onBlur={() => {
          setIsFocused(false)
        }}
      >
        {children}
      </div>
    </InputContext.Provider>
  )
}

export default InputRoot
