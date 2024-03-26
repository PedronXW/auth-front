import { Eye, EyeClosed, X } from '@phosphor-icons/react'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputContext } from './InputRoot'

const InputActionVisibilityRemove = () => {
  const { visibility, changeVisibility, id } = useContext(InputContext)

  const { setValue, getValues } = useFormContext()

  function handleChangeVisibility() {
    changeVisibility(!visibility)
  }

  return (
    <div className="flex">
      <button
        type="button"
        className="h-5 w-5 mr-4"
        onClick={handleChangeVisibility}
      >
        {getValues()[id] !== undefined &&
        getValues()[id].length === 0 ? null : visibility ? (
          <EyeClosed
            size={20}
            className="text-primary_color"
            onClick={(event) => {
              changeVisibility(false)
            }}
          />
        ) : (
          <Eye
            size={20}
            className="text-primary_color"
            onClick={(event) => {
              changeVisibility(true)
            }}
          />
        )}
      </button>
      <button type="reset" className="h-5 w-5">
        {getValues()[id] !== undefined && getValues()[id].length > 0 ? (
          <X
            size={20}
            className="text-primary_color"
            onClick={(event) => {
              setValue(id, '')
            }}
          />
        ) : null}
      </button>
    </div>
  )
}

export default InputActionVisibilityRemove
