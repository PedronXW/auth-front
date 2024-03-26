import { Eye, EyeClosed, X } from '@phosphor-icons/react'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputContext } from './InputRoot'

const InputActionVisibilityRemove = () => {
  const { visibility, changeVisibility, id } = useContext(InputContext)

  const { setValue, getValues } = useFormContext()

  if (getValues()[id] !== undefined && getValues()[id].length === 0) return null

  if (getValues()[id] !== undefined && getValues()[id].length !== 0) {
    if (visibility) {
      return (
        <div className="flex">
          <EyeClosed
            size={20}
            className="text-primary_color"
            onClick={() => {
              changeVisibility(false)
            }}
          />
          <button type="reset" className="h-5 w-5">
            {getValues()[id] !== undefined && getValues()[id].length > 0 ? (
              <X
                size={20}
                className="text-primary_color"
                onClick={() => {
                  setValue(id, '')
                }}
              />
            ) : null}
          </button>
        </div>
      )
    }
    return (
      <div className="flex">
        <Eye
          size={20}
          className="text-primary_color"
          onClick={() => {
            changeVisibility(true)
          }}
        />
        <button type="reset" className="h-5 w-5">
          {getValues()[id] !== undefined && getValues()[id].length > 0 ? (
            <X
              size={20}
              className="text-primary_color"
              onClick={() => {
                setValue(id, '')
              }}
            />
          ) : null}
        </button>
      </div>
    )
  }
}

export default InputActionVisibilityRemove
