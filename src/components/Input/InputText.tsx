import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputContext } from './InputRoot'

interface InputTextInterface {
  placeholder: string
}

const InputText = ({ placeholder }: InputTextInterface) => {
  const { visibility, id } = useContext(InputContext)
  const { register } = useFormContext()

  return (
    <input
      {...register(id)}
      type={visibility ? 'password' : 'text'}
      placeholder={placeholder}
      autoComplete="off"
      className={`font-medium text-sm ml-2 w-full pr-1`}
    />
  )
}

export default InputText
