import { X } from '@phosphor-icons/react'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputContext } from './InputRoot'

const InputActionRemove = () => {
  const { setValue, getValues } = useFormContext()
  const { id } = useContext(InputContext)

  if (getValues()[id] !== undefined && getValues()[id] !== '') {
    return (
      <button type="reset" className="h-5 w-5">
        <X
          size={20}
          className="text-primary_color"
          onClick={(event) => {
            setValue(id, '')
          }}
        />
      </button>
    )
  } else {
    return <div></div>
  }
}

export default InputActionRemove
